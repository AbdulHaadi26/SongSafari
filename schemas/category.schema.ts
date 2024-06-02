import { Schema } from "mongoose";

interface ICategoryProps {
  _id: object;
  name: string;
  description: string;
  covers: string;
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
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});

export { CategorySchema, ICategoryProps };
