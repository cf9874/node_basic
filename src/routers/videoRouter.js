import express from "express";
import { deleteVideo, editVideo, postEdit, uploadVideo, watchVideo } from "../controllers";

export const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id(\\d+)", watchVideo);
// (\\d+) : only number => regular expression
videoRouter.route("/:id(\\d+)/edit").get(editVideo).post(postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
