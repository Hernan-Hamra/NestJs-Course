import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'; // Asegúrate de importar 'Get'
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create_users.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}
  @ApiTags('users')
  @Get('/users')
  getUsers() {
    return this.usersService.getUsers(); // Llamar el método getUsers
  }

  @Post('/users')
  @ApiTags('users')
  createUser(@Body() user: CreateUsersDto) {
    return this.usersService.createUser(user);
  }
}
