import { Controller, Get } from '@nestjs/common';
import { UserInterface } from 'src/shared/models/user.interface';
import { UserRepositoryService } from './repository/user-repository/user-repository.service';

@Controller('users')
export class UsersController {
  constructor(private userDB: UserRepositoryService) {}

  @Get()
  async getUsers(): Promise<UserInterface[]> {
    return this.userDB.findAll();
  }
}
