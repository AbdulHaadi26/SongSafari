import mongoose from "mongoose";
import { AlbumSchema, IAlbumProps } from "../schemas/album.schema";
import { AlbumSchemaValidator } from "../validators/albumSchema.dto";

AlbumSchema.index({ _id: 1, name: 1, tags: 1, categories: 1, author: 1 });

AlbumSchema.pre("validate", async function (next) {
  await AlbumSchemaValidator.validateAsync(this.toObject());
  next();
});

const AlbumModel = mongoose.model<IAlbumProps>("albums", AlbumSchema);

export { AlbumModel, IAlbumProps };
