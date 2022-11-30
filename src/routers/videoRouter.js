import express from "express";
import { deleteVideo, editVideo, uploadVideo, watchVideo } from "../controllers";

export const videoRouter = express.Router();

videoRouter.get("/:id", watchVideo);
videoRouter.get("/:id/edit", editVideo);
videoRouter.get("/upload", uploadVideo);

videoRouter.get("/:id/delete", deleteVideo);
