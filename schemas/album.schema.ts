import { Schema } from "mongoose";
import { IAttachmentProps } from "./attachment.schema";
import { IUserProps } from "./user.schema";
import { ITagProps } from "./tags.schema";
import { ICategoryProps } from "./category.schema";

interface IAlbumProps {
  _id: object;
  name: string;
  description: string;
  cover: IAttachmentProps[];
  tags: ITagProps[];
  categories: ICategoryProps[];
  author: string;
  released: Date;
  createdBy: IUserProps;
  updatedBy?: IUserProps;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}

const AlbumSchema = new Schema<IAlbumProps>({
  name: { type: String, required: true },
  description: { type: String },
  cover: [
    {
      type: Schema.Types.ObjectId,
      ref: "attachments",
    },
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },
  ],
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "tags",
    },
  ],
  released: { type: Date },
  author: { type: String },
  createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
  updatedBy: { type: Schema.Types.ObjectId, ref: "users" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});

export { AlbumSchema, IAlbumProps };
