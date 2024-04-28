import mongoose from "mongoose";
import { ITagProps, TagSchema } from "../schemas/tags.schema";
import { TagSchemaValidator } from "../validators/tagSchema.dto";

TagSchema.index({ _id: 1, name: 1 });

TagSchema.pre("validate", async function (next) {
  await TagSchemaValidator.validateAsync(this.toObject());
  next();
});

const TagModel = mongoose.model<ITagProps>("tags", TagSchema);

export { TagModel, ITagProps };
