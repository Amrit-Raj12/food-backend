import { ApiProperty } from '@nestjs/swagger';

import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    MaxLength,
} from 'class-validator';

export class CreateUserDto {
    // @IsString()
    // @IsNotEmpty()
    // @MaxLength(50)
    // name: string;

    // @IsEmail()
    // email: string;

    // @IsString()
    // @MinLength(8)
    // @MaxLength(30)
    // password: string;

    @ApiProperty({
        example: 'Amrit Raj Sharma',
    })
    @IsString()
    name: string;

    @ApiProperty({
        example: 'amrit@gmail.com',
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        example: 'password123',
        minLength: 8,
    })
    @MinLength(8)
    password: string;
}