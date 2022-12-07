import express from "express";
import { deleteVideo, editVideo, postEdit, getUpload, watchVideo, postUpload } from "../controllers";

export const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id(\\d+)", watchVideo);
// (\\d+) : only number => regular expression
videoRouter.route("/:id(\\d+)/edit").get(editVideo).post(postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
