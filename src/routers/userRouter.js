import express from "express";
import { deleteVideo, handleEditUser, logout, see } from "../controllers";

export const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", handleEditUser);
userRouter.get("/delete", deleteVideo);
userRouter.get("/:id(\\d+)", see);
