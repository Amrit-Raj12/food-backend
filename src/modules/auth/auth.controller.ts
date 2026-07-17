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

@Controller('auth')
export class AuthController {

    private readonly logger = new Logger(AuthController.name);

    @Post('test')
    test(@Body() body: CreateUserDto) {
        this.logger.log('Validation endpoint called');
        return ApiResponseUtil.success(
            'Validation Passed',
            body,
        );
    }

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