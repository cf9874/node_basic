import express from "express";
import morgan from "morgan";
import { globalRouter, userRouter, videoRouter } from "./routers";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);

app.use(express.urlencoded({ extended: true }));
//express application이 form의 value를 인식하게 하고
// 가공가능한 JS형식으로 변형시켜준다

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => {
  console.log(`server listening on port http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);

//port 설정
