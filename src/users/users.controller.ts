import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserInterface } from 'src/shared/models/user.interface';
import { UserRepositoryService } from './repository/user-repository/user-repository.service';

@Controller('users')
export class UsersController {
  constructor(private userDB: UserRepositoryService) {}

  @Get()
  async getUsers(): Promise<UserInterface[]> {
    return this.userDB.findAll();
  }

  @Post()
  async createUser(
    @Body() user: Partial<UserInterface>,
  ): Promise<UserInterface> {
    return this.userDB.createUser(user);
  }

  @Put(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() changes: any,
  ): Promise<UserInterface> {
    return this.userDB.updateUser(userId, changes);
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string) {
    return this.userDB.deleteUser(userId);
  }
}
