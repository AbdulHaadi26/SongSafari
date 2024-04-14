import dotenv from "dotenv";
import express, { Application } from "express";
import { connectToMongoDB } from "./utils/db";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);
  connectToMongoDB();
});
