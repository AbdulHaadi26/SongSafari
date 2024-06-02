import { Schema } from "mongoose";
import { ITagProps } from "./tags.schema";
import { ICategoryProps } from "./category.schema";
import { IAlbumProps } from "./album.schema";

interface ISongProps {
  _id: object;
  name: string;
  description: string;
  cover: string;
  album: IAlbumProps;
  tags: ITagProps[];
  categories: ICategoryProps[];
  author: string;
  released: Date;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}

const SongSchema = new Schema<ISongProps>({
  name: { type: String, required: true },
  description: { type: String },
  cover: {
    type: String,
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: "albums",
  },
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
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});

export { SongSchema, ISongProps };
