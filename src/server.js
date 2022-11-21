import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const loggerMiddleware = morgan("dev");
app.use(loggerMiddleware);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleUser);

const videoRouter = express.Router();
const handleVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => {
  console.log(`server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
