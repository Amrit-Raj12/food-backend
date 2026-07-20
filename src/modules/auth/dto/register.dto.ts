import {
    IsEmail,
    IsOptional,
    IsString,
    IsNotEmpty,
    Matches,
    MinLength,
} from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterDto {
    @ApiProperty({
        example: 'Amrit Raj Sharma',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiPropertyOptional({
        example: 'amrit@gmail.com',
    })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiPropertyOptional({
        example: '9876543210',
    })
    @IsOptional()
    @Matches(/^[6-9]\d{9}$/, {
        message: 'Phone number must be a valid Indian mobile number',
    })
    phone?: string;

    @ApiProperty({
        example: 'Password@123',
    })
    @IsString()
    @MinLength(8)
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
        {
            message:
                'Password must contain uppercase, lowercase, number and special character',
        },
    )
    password: string;
}