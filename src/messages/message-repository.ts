import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageInterface } from './message.interface';

@Injectable()
export class MessageRepositoryService {
  constructor(
    @InjectModel('Message') private messageModel: Model<MessageInterface>,
  ) {}

  async findAll(): Promise<MessageInterface[]> {
    return this.messageModel.find();
  }

  getMessagesByFolder(folder: string) {
    console.log('searching for lessons ', folder);

    if (folder) {
      return this.messageModel.find({
        folder,
      });
    }

    return this.findAll();
  }

  async updateUser(
    userId: string,
    changes: Partial<MessageInterface>,
  ): Promise<MessageInterface> {
    return this.messageModel.findByIdAndUpdate({ _id: userId }, changes, {
      new: true,
    });
  }

  async deleteUser(userId: string) {
    return (await this.messageModel.deleteOne({ _id: userId })).deletedCount;
  }

  async createUser(user: Partial<MessageInterface>): Promise<MessageInterface> {
    const newUser = new this.messageModel(user);
    await newUser.save();
    return newUser.toObject({ versionKey: false });
  }
}
