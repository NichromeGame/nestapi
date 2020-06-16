import {Document} from "mongoose";

export interface IAddress extends Document {
  readonly country: string;
  readonly city: string;
  readonly address: string;
}