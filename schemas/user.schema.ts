import { Schema } from "mongoose";

interface IUserProps {
  _id: object;
  name: string;
  username: string;
  email: string;
  password: string;
  birthday?: Date;
  gender?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}

const UserSchema = new Schema<IUserProps>({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthday: { type: Date },
  gender: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});

export { UserSchema, IUserProps };
