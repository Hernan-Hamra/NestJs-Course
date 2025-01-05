import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create_users.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany(); // Devuelve la lista de usuarios
  }

  createUser(user: CreateUsersDto) {
    return this.prisma.user.create({ data: user });
  }
}
