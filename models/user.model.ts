import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { IUserProps, UserSchema } from "../schemas/user.schema";
import { UserSchemaValidator } from "../validators/userSchema.dto";

UserSchema.index({ _id: 1, email: 1, isActive: 1 });

UserSchema.pre("validate", async function (next) {
  await UserSchemaValidator.validateAsync(this.toObject());
  next();
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
  }
  next();
});

const UserModel = mongoose.model<IUserProps>("users", UserSchema);

export { UserModel, IUserProps };
