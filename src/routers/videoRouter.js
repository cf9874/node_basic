import express from "express";
import { deleteVideo, editVideo, uploadVideo, watchVideo } from "../controllers";

export const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id(\\d+)", watchVideo);
// (\\d+) : only number => regular expression
videoRouter.get("/:id(\\d+)/edit", editVideo);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
