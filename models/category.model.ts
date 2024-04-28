import mongoose from "mongoose";
import { ICategoryProps, CategorySchema } from "../schemas/category.schema";
import { CategorySchemaValidator } from "../validators/categorySchema.dto";

CategorySchema.index({ _id: 1, name: 1 });

CategorySchema.pre("validate", async function (next) {
  await CategorySchemaValidator.validateAsync(this.toObject());
  next();
});

const CategoryModel = mongoose.model<ICategoryProps>(
  "categories",
  CategorySchema
);

export { CategoryModel, ICategoryProps };
