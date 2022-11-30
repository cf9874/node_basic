import express from "express";
import { handleDeleteUser, handleEditUser } from "../controllers";

export const userRouter = express.Router();

userRouter.get("/edit", handleEditUser);
userRouter.get("/delete", handleDeleteUser);
