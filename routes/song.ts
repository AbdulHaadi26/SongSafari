import express from "express";
import {
  createSong,
  updateSong,
  getAllSongs,
  getSongById,
  deleteSong,
} from "../controllers/song.controller";

const router = express.Router();

router.post(``, createSong);
router.patch(`/:id`, updateSong);
router.get(``, getAllSongs);
router.get(`/:id`, getSongById);
router.delete(`/:id`, deleteSong);

export { router as songRouter };
