import express from "express";
import {
  createTag,
  updateTag,
  getAllTags,
  getTagById,
  deleteTag,
} from "../controllers/tags.controller";

const router = express.Router();

router.post(``, createTag);
router.patch(`/:id`, updateTag);
router.get(``, getAllTags);
router.get(`/:id`, getTagById);
router.delete(`/:id`, deleteTag);

export { router as tagsRouter };
