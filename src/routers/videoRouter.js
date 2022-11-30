import express from "express";
import { handleEditVideo, handleWatchVideo } from "../controllers";

export const videoRouter = express.Router();

videoRouter.get("/watch", handleWatchVideo);
videoRouter.get("/edit", handleEditVideo);
