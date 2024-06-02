import { Request, Response } from "express";
import mongoose from "mongoose";
import { AlbumModel, IAlbumProps } from "../models/album.model";
import { SongModel } from "../models/song.model";

const createAlbum = async (req: Request, res: Response) => {
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
    } = req.body;

    if (API_KEY !== process.env.API_KEY) {
      return res.status(401).send("Unauthorized");
    }

    const data: IAlbumProps = {
      _id: new mongoose.Types.ObjectId(),
      name,
      cover,
      description,
      tags,
      categories,
      author,
      released,
    };

    await AlbumModel.create(data);

    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const updateAlbum = async (req: Request, res: Response) => {
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
    } = req.body;

    if (API_KEY !== process.env.API_KEY) {
      return res.status(401).send("Unauthorized");
    }

    await AlbumModel.updateOne(
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
        updatedAt: new Date(),
      }
    );

    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const getAllAlbums = async (req: Request, res: Response) => {
  try {
    const data = await AlbumModel.find().limit(100);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const getAlbumById = async (req: Request, res: Response) => {
  try {
    const data = await AlbumModel.findById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
const deleteAlbum = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { API_KEY } = req.body;

    if (API_KEY !== process.env.API_KEY) {
      return res.status(401).send("Unauthorized");
    }

    await SongModel.deleteMany({
      album: id,
    });

    await AlbumModel.deleteOne({
      _id: req.params.id,
    });

    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

export { createAlbum, getAlbumById, getAllAlbums, updateAlbum, deleteAlbum };
