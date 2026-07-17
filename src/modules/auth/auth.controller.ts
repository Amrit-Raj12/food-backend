import {
    Body,
    Controller,
    Get,
    Post,
    Query,
} from '@nestjs/common';

import { CreateUserDto } from './dto/register.dto';
import { PaginationDto } from '@common/dto/pagination.dto';

@Controller('auth')
export class AuthController {
    @Post('test')
    test(@Body() body: CreateUserDto) {
        return {
            success: true,
            message: 'Validation Passed',
            data: body,
        };
    }

    @Get('pagination')
    pagination(@Query() query: PaginationDto) {
        return {
            success: true,
            message: 'Pagination DTO Working',
            data: {
                page: query.page,
                limit: query.limit,
                pageType: typeof query.page,
                limitType: typeof query.limit,
            },
        };
    }
}