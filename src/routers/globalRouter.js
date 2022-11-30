import express from "express";
import { handleHome, handleJoin, login, search } from "../controllers";

export const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);
globalRouter.get("/login", login);
// login
globalRouter.get("/search", search);
// video search
