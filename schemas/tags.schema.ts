import { Schema } from "mongoose";

interface ITagProps {
  _id: object;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}

const TagSchema = new Schema<ITagProps>({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});

export { TagSchema, ITagProps };
