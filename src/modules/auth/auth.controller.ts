import {
    Body,
    Controller,
    Get,
    Post,
    Query,
} from '@nestjs/common';

import { CreateUserDto } from './dto/register.dto';
import { PaginationDto } from '@common/dto/pagination.dto';
import { ApiResponseUtil } from '@/common/utils/api-response.util';
import { Logger } from '@nestjs/common';

import {
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {

    private readonly logger = new Logger(AuthController.name);

    @Post('test')
    @ApiOperation({
        summary: 'Validate user registration payload',
    })
    @ApiResponse({
        status: 201,
        description: 'Validation successful',
    })
    @ApiResponse({
        status: 400,
        description: 'Validation failed',
    })
    test(@Body() body: CreateUserDto) {
        this.logger.log('Validation endpoint called');
        return ApiResponseUtil.success(
            'Validation Passed',
            body,
        );
    }

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
}