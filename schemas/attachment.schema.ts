import { Schema } from "mongoose";
import { IUserProps } from "./user.schema";

interface IAttachmentProps {
  _id: object;
  name: string;
  size: number;
  path: string;
  mime_type: string;
  createdBy: IUserProps;
  updatedBy?: IUserProps;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}

const AttachmentSchema = new Schema<IAttachmentProps>({
  name: { type: String, required: true },
  size: { type: Number, required: true },
  path: { type: String, required: true },
  mime_type: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
  updatedBy: { type: Schema.Types.ObjectId, ref: "users" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});

export { AttachmentSchema, IAttachmentProps };
