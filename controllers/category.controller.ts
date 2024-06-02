import { Request, Response } from "express";
import mongoose from "mongoose";
import { ICategoryProps } from "../schemas/category.schema";
import { CategoryModel } from "../models/category.model";
import { AlbumModel } from "../models/album.model";
import { SongModel } from "../models/song.model";

const createCategory = async (req: Request, res: Response) => {
  try {
    const { API_KEY, name, cover, description } = req.body;

    if (API_KEY !== process.env.API_KEY) {
      return res.status(401).send("Unauthorized");
    }

    const data: ICategoryProps = {
      _id: new mongoose.Types.ObjectId(),
      name,
      cover,
      description,
    };

    await CategoryModel.create(data);

    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const { API_KEY, name, cover, description } = req.body;

    if (API_KEY !== process.env.API_KEY) {
      return res.status(401).send("Unauthorized");
    }

    await CategoryModel.updateOne(
      {
        _id: req.params.id,
      },
      {
        name,
        cover,
        description,
        updatedAt: new Date(),
      }
    );

    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const data = await CategoryModel.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const getCategoryById = async (req: Request, res: Response) => {
  try {
    const data = await CategoryModel.findById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { API_KEY } = req.body;

    if (API_KEY !== process.env.API_KEY) {
      return res.status(401).send("Unauthorized");
    }

    await Promise.all([
      AlbumModel.updateMany({ categories: id }, { $pull: { categories: id } }),
      SongModel.updateMany({ categories: id }, { $pull: { categories: id } }),
    ]);

    await CategoryModel.deleteOne({
      _id: req.params.id,
    });

    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

export {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
};
