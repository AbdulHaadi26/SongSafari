import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import { logger } from "./utils/logger";
import "./utils/db";

const app: Application = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
