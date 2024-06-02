import { Request, Response } from "express";
import mongoose from "mongoose";
import { ITagProps } from "../schemas/tags.schema";
import { TagModel } from "../models/tags.model";

const create = async (req: Request, res: Response) => {
  try {
    const { API_KEY, name } = req.body;

    if (req.body.API_KEY !== process.env.API_KEY) {
      return res.status(401).send("Unauthorized");
    }

    const data: ITagProps = {
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
    };

    await TagModel.create(data);

    res.status(200).send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const get = async (req: Request, res: Response) => {
  try {
    const data = await TagModel.find();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const data = await TagModel.findById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

export { create, get, getById };
