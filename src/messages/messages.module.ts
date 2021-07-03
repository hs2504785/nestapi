import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from './schemas/massage.schema';
import { MessageRepositoryService } from './message-repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Message',
        schema: MessageSchema,
      },
    ]),
  ],
  controllers: [MessagesController],
  providers: [MessageRepositoryService],
})
export class MessagesModule {}
