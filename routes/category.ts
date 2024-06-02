import express from "express";
import {
  createCategory,
  updateCategory,
  getAllCategories,
  getCategoryById,
  deleteCategory,
} from "../controllers/category.controller";

const router = express.Router();

router.post(``, createCategory);
router.patch(`/:id`, updateCategory);
router.get(``, getAllCategories);
router.get(`/:id`, getCategoryById);
router.delete(`/:id`, deleteCategory);

export { router as categoriesRouter };
