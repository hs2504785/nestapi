import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGODB_CONNECTION_URL } from './constants';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { ProductModule } from './product/product.module';
import { PusherModule } from './pusher/pusher.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(MONGODB_CONNECTION_URL),
    MessagesModule,
    ProductModule,
    PusherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
