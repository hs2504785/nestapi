import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MessageRepositoryService } from './message-repository';
import { MessageInterface } from './message.interface';

@Controller('messages')
export class MessagesController {
  constructor(private messageDB: MessageRepositoryService) {}

  @Get()
  async getUsers(): Promise<MessageInterface[]> {
    return this.messageDB.findAll();
  }

  @Post()
  async createUser(
    @Body() user: Partial<MessageInterface>,
  ): Promise<MessageInterface> {
    return this.messageDB.createUser(user);
  }

  @Put(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() changes: any,
  ): Promise<MessageInterface> {
    return this.messageDB.updateUser(userId, changes);
  }

  @Delete(':userId')
  async deleteUser(@Param('userId') userId: string) {
    return this.messageDB.deleteUser(userId);
  }
}
