import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from 'src/shared/models/user.interface';

@Injectable()
export class UserRepositoryService {
  constructor(@InjectModel('User') private userModel: Model<UserInterface>) {}

  async findAll(): Promise<UserInterface[]> {
    return this.userModel.find();
  }

  async updateUser(
    userId: string,
    changes: Partial<UserInterface>,
  ): Promise<UserInterface> {
    return this.userModel.findByIdAndUpdate({ _id: userId }, changes, {
      new: true,
    });
  }

  async deleteUser(userId: string) {
    return (await this.userModel.deleteOne({ _id: userId })).deletedCount;
  }

  async createUser(user: Partial<UserInterface>): Promise<UserInterface> {
    const newUser = new this.userModel(user);
    await newUser.save();
    return newUser.toObject({ versionKey: false });
  }
}
