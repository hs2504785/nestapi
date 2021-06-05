import { Controller, Get } from '@nestjs/common';
import { UserInterface } from 'src/shared/models/user.interface';

@Controller('users')
export class UsersController {
  @Get()
  async getUsers(): Promise<UserInterface[]> {
    console.log('PPPS');
    return [];
  }
}
