import mongoose from "mongoose";
import { UserModel, IUserProps } from "./user.model";
import dotenv from "dotenv";
dotenv.config();

describe("User Model", () => {
  beforeAll(async () => {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  const _id = new mongoose.Types.ObjectId();

  it("Create User", async () => {
    const userData: IUserProps = {
      _id,
      name: "John Doe",
      username: "john_doe",
      email: "john@example.com",
      password: "password123",
    };

    try {
      const savedUser = await UserModel.create(userData);
      expect(savedUser._id).toBeDefined();
      expect(savedUser.name).toBe(userData.name);
      expect(savedUser.username).toBe(userData.username);
      expect(savedUser.email).toBe(userData.email);
      expect(savedUser.password).toBeDefined();
      expect(savedUser.isActive).toBe(true);
      expect(savedUser.createdAt).toBeDefined();
      expect(savedUser.updatedAt).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it("Update User", async () => {
    const updatedName = "John Doe (Updated)";

    try {
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
