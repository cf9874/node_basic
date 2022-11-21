import express from "express";
import {
  watchVideo,
  editVideo,
  removeVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watchVideo);
videoRouter.get("/edit", editVideo);
videoRouter.get("/delete", removeVideo);

export default videoRouter;
