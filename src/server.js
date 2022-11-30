import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.use(logger);

const handleHome = (req, res) => {
  return res.send("Home");
};

const globalMiddleware = (req, res, next) => {
  console.log(`someone is going to ${req.url}`);
  next();
};
app.use(globalMiddleware);
app.get("/", handleHome);
app.get("/users", () => console.log(9874));
app.get("/videos", () => console.log(9598));

const handleListening = () => {
  console.log(`server listening on port http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);

//port 설정
