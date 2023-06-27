import {
  Controller,
  Request,
  Post,
  Body,
  UseGuards,
  Get,
} from '@nestjs/common';
import { CreateUserDto } from './users/dto/create-user.dto';
import { UsersService } from './users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { User as userEntity } from './users/entities/user.entity';

@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get()
  hello() {
    return 'Hello World!';
  }

  @ApiResponse({ status: 201, description: 'successfully', type: userEntity })
  @Post('auth/register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @ApiResponse({ status: 201, description: 'created', type: userEntity })
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
