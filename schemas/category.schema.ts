import { Schema } from "mongoose";
import { IAttachmentProps } from "./attachment.schema";
import { IUserProps } from "./user.schema";

interface ICategoryProps {
  _id: object;
  name: string;
  description: string;
  covers: IAttachmentProps[];
  createdBy: IUserProps;
  updatedBy?: IUserProps;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}

const CategorySchema = new Schema<ICategoryProps>({
  name: { type: String, required: true },
  description: { type: String },
  covers: [
    {
      type: Schema.Types.ObjectId,
      ref: "attachments",
    },
  ],
  createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
  updatedBy: { type: Schema.Types.ObjectId, ref: "users" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});

export { CategorySchema, ICategoryProps };
