import express from "express";
const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Homes");
globalRouter.get("/", handleHome);

export default globalRouter;
