import express from "express";
import {
  deleteAlbum,
  getAlbumById,
  getAllAlbums,
  updateAlbum,
  createAlbum,
} from "../controllers/album.controller";

const router = express.Router();

router.post(``, createAlbum);
router.patch(`/:id`, updateAlbum);
router.get(``, getAllAlbums);
router.get(`/:id`, getAlbumById);
router.delete(`/:id`, deleteAlbum);

export { router as albumRouter };
