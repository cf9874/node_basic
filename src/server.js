import express from "express";

const PORT = 4000;
const app = express();

const testMiddleware = (req, res, next) => {
  console.log(`you're in ${req.url} ㅋ`);
  console.log("test middleware");

  next();
};

const handleHome = (req, res, next) => {
  console.log("hihi");

  //   return res.end();
  return res.send("<h1>I still love you.</h1>");
};
const handleLogin = (req, res) => {
  return res.send({ messge: "here is login page" });
};
//how to respond GET request
app.get("/", testMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`server listening on port http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);

//port 설정
