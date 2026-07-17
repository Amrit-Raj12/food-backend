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
        return body;
    }

    @Get('pagination')
    pagination(@Query() query: PaginationDto) {
        return {
            page: query.page,
            limit: query.limit
        }
    }
}