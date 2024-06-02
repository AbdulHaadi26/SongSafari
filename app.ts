import dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";

dotenv.config();

import { connectToMongoDB } from "./utils/db";

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

import { defineRoutes } from "./routes";
defineRoutes(app);

app.listen(port, () => {
  console.info(`Server is running at http://localhost:${port}`);
  connectToMongoDB();
});
