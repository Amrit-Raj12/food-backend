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

@Controller('auth')
export class AuthController {
    @Post('test')
    test(@Body() body: CreateUserDto) {
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