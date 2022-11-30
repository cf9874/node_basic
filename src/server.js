import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res, next) => {
  res.send("Home");
  next();
};
// next 는 다음함수를 호출해줌

app.get("/", handleHome, () => console.log("home"));
app.get("/users", () => console.log(9874));
app.get("/videos", () => console.log(9598));

const handleListening = () => {
  console.log(`server listening on port http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);

//port 설정
