import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const loggerMiddleware = morgan("dev");

const handleHome = (req, res, next) => {
  console.log("hihi");
  return res.send("<h1>I still love you.</h1>");
};
const handleLogin = (req, res) => {
  return res.send({ messge: "here is login page" });
};

app.use(loggerMiddleware);

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`server listening on port http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);

//port 설정
