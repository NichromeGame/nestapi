import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from "bcryptjs";
import * as _ from "lodash";

import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel("User") private readonly userModel: Model<IUser>){
    console.log(this.userModel);
  }

  async create(createUserDto: CreateUserDto, roles: Array<string>): Promise<IUser> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(createUserDto.password, salt);

    const user = new this.userModel(_.assignIn(createUserDto, {password: hash, roles}));

    return await user.save();
  }

  // async update() {

  // }

  // async delete() {

  // }

  async find(id: string): Promise<IUser> {
    return await this.userModel.findById(id).exec();
  }
}
