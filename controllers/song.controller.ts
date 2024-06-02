import { Request, Response } from "express";
import mongoose from "mongoose";
import { ISongProps, SongModel } from "../models/song.model";

const createSong = async (req: Request, res: Response) => {
  try {
    const {
      API_KEY,
      name,
      cover,
      description,
      tags,
      released,
      categories,
      author,
      album,
    } = req.body;

    if (API_KEY !== process.env.API_KEY) {
      return res.status(401).send("Unauthorized");
    }

    const data: ISongProps = {
      _id: new mongoose.Types.ObjectId(),
      name,
      cover,
      description,
      tags,
      categories,
      author,
      released,
      album,
    };

    await SongModel.create(data);

    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const updateSong = async (req: Request, res: Response) => {
  try {
    const {
      API_KEY,
      name,
      cover,
      description,
      tags,
      released,
      categories,
      author,
      album,
    } = req.body;

    if (API_KEY !== process.env.API_KEY) {
      return res.status(401).send("Unauthorized");
    }

    await SongModel.updateOne(
      {
        _id: req.params.id,
      },
      {
        name,
        cover,
        description,
        tags,
        released,
        categories,
        author,
        album,
        updatedAt: new Date(),
      }
    );

    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const getAllSongs = async (req: Request, res: Response) => {
  try {
    const data = await SongModel.find().limit(100);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const getSongById = async (req: Request, res: Response) => {
  try {
    const data = await SongModel.findById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
const deleteSong = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { API_KEY } = req.body;

    if (API_KEY !== process.env.API_KEY) {
      return res.status(401).send("Unauthorized");
    }

    await SongModel.deleteOne({
      _id: req.params.id,
    });

    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

export { createSong, getAllSongs, getSongById, updateSong, deleteSong };
