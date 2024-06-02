import { Schema } from "mongoose";

interface ICategoryProps {
  _id: object;
  name: string;
  description: string;
  cover: string;
  createdAt?: Date;
  updatedAt?: Date;
  isActive?: boolean;
}

const CategorySchema = new Schema<ICategoryProps>({
  name: { type: String, required: true },
  description: { type: String },
  cover: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});

export { CategorySchema, ICategoryProps };
