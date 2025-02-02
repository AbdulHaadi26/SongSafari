import { Request, Response } from "express";
import mongoose from "mongoose";
import { ITagProps } from "../schemas/tags.schema";
import { TagModel } from "../models/tags.model";
import { AlbumModel } from "../models/album.model";
import { SongModel } from "../models/song.model";

const createTag = async (req: Request, res: Response) => {
  try {
    const { API_KEY, name } = req.body;

    if (API_KEY !== process.env.API_KEY) {
      return res.status(401).send("Unauthorized");
    }

    const data: ITagProps = {
      _id: new mongoose.Types.ObjectId(),
      name,
    };

    await TagModel.create(data);

    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const updateTag = async (req: Request, res: Response) => {
  try {
    const { API_KEY, name } = req.body;

    if (API_KEY !== process.env.API_KEY) {
      return res.status(401).send("Unauthorized");
    }

    const updatedData = await TagModel.updateOne(
      {
        _id: req.params.id,
      },
      {
        name,
        updatedAt: new Date(),
      }
    );

    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const getAllTags = async (req: Request, res: Response) => {
  try {
    const data = await TagModel.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const getTagById = async (req: Request, res: Response) => {
  try {
    const data = await TagModel.findById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const deleteTag = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { API_KEY } = req.body;

    if (API_KEY !== process.env.API_KEY) {
      return res.status(401).send("Unauthorized");
    }

    await Promise.all([
      AlbumModel.updateMany({ tags: id }, { $pull: { tags: id } }),
      SongModel.updateMany({ tags: id }, { $pull: { tags: id } }),
    ]);

    await TagModel.deleteOne({
      _id: req.params.id,
    });

    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

export { createTag, updateTag, getAllTags, getTagById, deleteTag };
