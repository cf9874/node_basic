import express from "express";
import morgan from "morgan";

import * as route from "./routers";

const PORT = 4000;
const app = express();
const loggerMiddleware = morgan("dev");

app.set("view engine", "pug");
// view engine setting
app.set("views", process.cwd() + "/src/views");
// views setting
app.use(loggerMiddleware);

app.use("/", route.globalRouter);
app.use("/users", route.userRouter);
app.use("/videos", route.videoRouter);

const handleListening = () => {
  console.log(`server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
