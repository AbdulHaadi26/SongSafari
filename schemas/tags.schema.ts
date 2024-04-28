import { Schema } from "mongoose";
import { IUserProps } from "./user.schema";

interface ITagProps {
  _id: object;
  name: string;
  createdBy: IUserProps;
  updatedBy?: IUserProps;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}

const TagSchema = new Schema<ITagProps>({
  name: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
  updatedBy: { type: Schema.Types.ObjectId, ref: "users" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});

export { TagSchema, ITagProps };
