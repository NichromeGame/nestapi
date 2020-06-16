import * as mongoose from "mongoose";
import { genderEnum } from "../enums/gender.enum";
import {roleEnum} from "../enums/role.enum";

export const UserSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  avatar: { type: String, require: false },
  avatarId: { type: String, require: false, default: null },
  firstName: { type: String, require: true },
  secondName: { type: String, require: true },
  gender: { type: String, require: true, enum: Object.values(genderEnum) },
  address: {
    country: { type: String, require: false, default: null },
    city: { type: String, require: false, default: null },
    address: { type: String, require: false, default: null },
  },
  profession: {type: String, require: false, default: null},
  phone: {type: String, require: false, default: null},
  role: {type: String, require: true, enum: Object.values(roleEnum)},
  password: {type: String, require: true},
});
