import express from "express";
import { handleJoin } from "../controllers";
import { handleHome } from "../controllers/videoController";

export const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);
