import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    MaxLength,
} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(30)
    password: string;
}