import express from "express";
import {
  watchVideo,
  editVideo,
  removeVideo,
  searchVideo,
  uploadVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id(\\d+)", watchVideo);
videoRouter.get("/:id(\\d+)/edit", editVideo);
videoRouter.get("/:id(\\d+)/delete", removeVideo);
videoRouter.get("/:id(\\d+)/search", searchVideo);

export default videoRouter;
