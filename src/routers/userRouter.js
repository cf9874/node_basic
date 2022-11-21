import express from "express";
const userRouter = express.Router();
const handleUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleUser);

export default userRouter;
