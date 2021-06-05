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
}
