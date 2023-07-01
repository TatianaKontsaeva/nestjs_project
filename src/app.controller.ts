import {
  Controller,
  Request,
  Post,
  Body,
  UseGuards,
  Get,
  UsePipes
} from '@nestjs/common';
import { CreateUserDto, createUserSchema } from './users/dto/create-user.dto';
import { UsersService } from './users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { User as userEntity } from './users/entities/user.entity';
import { JoiValidationPipe } from './pipes/ValidationPipes';

@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Get()
  hello(): string {
    return 'Hello World!';
  }

  @ApiResponse({ status: 201, description: 'successfully', type: userEntity })
  @Post('auth/register')
  @UsePipes(new JoiValidationPipe(createUserSchema))
  register(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.usersService.register(createUserDto);
  }

  @ApiResponse({ status: 201, description: 'created', type: userEntity })
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req): Promise<any> {
    return this.authService.login(req.user);
  }
}
