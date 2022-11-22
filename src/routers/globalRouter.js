import express from "express";
import { join, login, recommendedVideos } from "../controllers";

const globalRouter = express.Router();

globalRouter.get("/", recommendedVideos);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
