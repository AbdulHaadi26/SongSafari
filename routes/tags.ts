import express from "express";
import { create, get, getById } from "../controllers/tags.controller";

const router = express.Router();

router.post(``, create);
router.get(``, get);
router.get(`/:id`, getById);

export { router };
