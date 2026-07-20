import {
    BadRequestException,
    ConflictException,
    Injectable,
} from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { VerificationType } from '@prisma/client';

import { PrismaService } from '@/prisma/prisma.service';

import { RegisterDto } from './dto/register.dto';

import { ApiResponseUtil } from '@/common/utils/api-response.util';

import { VerifyOtpDto } from './dto/verify-otp.dto';

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) { }

    private generateOtp(): string {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    async register(registerDto: RegisterDto) {
        const { name, email, phone, password } = registerDto;

        // Validate email or phone
        if (!email && !phone) {
            throw new BadRequestException(
                'Either email or phone number is required.',
            );
        }

        // Check duplicate email
        if (email) {
            const existingEmail = await this.prisma.user.findUnique({
                where: {
                    email,
                },
            });

            if (existingEmail) {
                throw new ConflictException('Email already registered');
            }
        }

        // Check duplicate phone
        if (phone) {
            const existingPhone = await this.prisma.user.findUnique({
                where: {
                    phone,
                },
            });

            if (existingPhone) {
                throw new ConflictException('Phone number already registered');
            }
        }

        // Hash password
        const SALT_ROUNDS = 10;

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // Create user
        const user = await this.prisma.user.create({
            data: {
                name,
                email,
                phone,
                password: hashedPassword,
            },
        });

        // Generate OTP
        const otp = this.generateOtp();

        // OTP expiry (10 minutes)
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

        // Decide OTP type
        const otpType = email
            ? VerificationType.EMAIL
            : VerificationType.PHONE;

        // Save OTP
        await this.prisma.oTP.create({
            data: {
                userId: user.id,
                type: otpType,
                code: otp,
                expiresAt,
            },
        });

        // Temporary logging
        console.log('==============================');
        console.log('Generated OTP:', otp);
        console.log('Verification Type:', otpType);
        console.log('Expires At:', expiresAt);
        console.log('==============================');

        return ApiResponseUtil.success(
            'Registration successful. Please verify your email or phone.',
            {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
            },
        );
    }

    async verifyOtp(verifyOtpDto: VerifyOtpDto) {
        const { email, phone, otp } = verifyOtpDto;

        // Validate email or phone
        if (!email && !phone) {
            throw new BadRequestException(
                'Either email or phone number is required.',
            );
        }

        // Find user
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [
                    ...(email ? [{ email }] : []),
                    ...(phone ? [{ phone }] : []),
                ],
            },
        });

        if (!user) {
            throw new BadRequestException('User not found.');
        }

        // Find latest unused OTP
        const otpRecord = await this.prisma.oTP.findFirst({
            where: {
                userId: user.id,
                code: otp,
                verifiedAt: null,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        if (!otpRecord) {
            throw new BadRequestException('Invalid OTP.');
        }

        // Check expiry
        if (otpRecord.expiresAt < new Date()) {
            throw new BadRequestException('OTP has expired.');
        }

        // Update verification status
        if (otpRecord.type === VerificationType.EMAIL) {
            await this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    emailVerified: true,
                },
            });
        } else {
            await this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    phoneVerified: true,
                },
            });
        }

        // Prevent OTP reuse
        await this.prisma.oTP.update({
            where: {
                id: otpRecord.id,
            },
            data: {
                verifiedAt: new Date(),
            },
        });

        return ApiResponseUtil.success(
            'OTP verified successfully.',
            {
                verified: true,
            },
        );
    }
}