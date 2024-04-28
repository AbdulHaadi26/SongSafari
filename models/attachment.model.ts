import mongoose from "mongoose";
import {
  IAttachmentProps,
  AttachmentSchema,
} from "../schemas/attachment.schema";
import { AttachmentSchemaValidator } from "../validators/attachment.dto";

AttachmentSchema.index({ _id: 1, name: 1 });

AttachmentSchema.pre("validate", async function (next) {
  await AttachmentSchemaValidator.validateAsync(this.toObject());
  next();
});

const AttachmentModel = mongoose.model<IAttachmentProps>(
  "attachments",
  AttachmentSchema
);

export { AttachmentModel, IAttachmentProps };
