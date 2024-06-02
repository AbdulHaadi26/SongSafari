import mongoose from "mongoose";
import { SongSchema, ISongProps } from "../schemas/song.schema";
import { SongSchemaValidator } from "../validators/songSchema.dto";

SongSchema.index({ _id: 1, name: 1, tags: 1, categories: 1, author: 1 });

SongSchema.pre("validate", async function (next) {
  await SongSchemaValidator.validateAsync(this.toObject());
  next();
});

const SongModel = mongoose.model<ISongProps>("songs", SongSchema);

export { SongModel, ISongProps };
