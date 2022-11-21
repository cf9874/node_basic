import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
  console.log("hihi");

  //   return res.end();
  return res.send("I still love you.");
};
const handleLogin = (req, res) => {
  return res.send("login page");
};
//how to respond GET request
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`server listening on port http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);

//port 설정
