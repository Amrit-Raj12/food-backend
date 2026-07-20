import {
    Body,
    Controller,
    Get,
    Logger,
    Post,
    Query,
} from '@nestjs/common';

import {
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

import { PaginationDto } from '@common/dto/pagination.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';

import { ApiResponseUtil } from '@/common/utils/api-response.util';

import { VerifyOtpDto } from './dto/verify-otp.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {

    private readonly logger = new Logger(AuthController.name);

    constructor(private readonly authService: AuthService) { }

    @Post('test')
    @Post('register')
    @ApiOperation({
        summary: 'Register a new user',
    })
    @ApiResponse({
        status: 201,
        description: 'User registered successfully',
    })
    @ApiResponse({
        status: 400,
        description: 'Validation failed',
    })
    @ApiResponse({
        status: 409,
        description: 'User already exists',
    })

    async register(@Body() registerDto: RegisterDto) {
        this.logger.log(`Registration attempt for email: ${registerDto.email}`);

        return this.authService.register(registerDto);
    }

    // test(@Body() body: CreateUserDto) {
    //     this.logger.log('Validation endpoint called');
    //     return ApiResponseUtil.success(
    //         'Validation Passed',
    //         body,
    //     );
    // }

    @ApiOperation({
        summary: 'Pagination DTO demo',
    })
    @Get('pagination')
    pagination(@Query() query: PaginationDto) {
        return ApiResponseUtil.success(
            'Pagination data retrieved successfully',
            {
                page: query.page,
                limit: query.limit,
                pageType: typeof query.page,
                limitType: typeof query.limit,
            },
        );
    }


    @Post('verify')
    @ApiOperation({
        summary: 'Verify Email or Phone OTP',
    })
    verifyOtp(@Body() verifyOtpDto: VerifyOtpDto) {
        return this.authService.verifyOtp(verifyOtpDto);
    }
}