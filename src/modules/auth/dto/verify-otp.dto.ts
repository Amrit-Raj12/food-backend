import {
    IsEmail,
    IsOptional,
    IsString,
    Matches,
    IsNotEmpty,
    Length,
} from 'class-validator';

import {
    ApiProperty,
    ApiPropertyOptional,
} from '@nestjs/swagger';

export class VerifyOtpDto {
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
    @Matches(/^[6-9]\d{9}$/)
    phone?: string;

    @ApiProperty({
        example: '123456',
    })
    @IsString()
    @IsNotEmpty()
    @Length(6, 6)
    otp: string;
}