import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => res.send("Home");

app.get("/", handleHome);
app.get("/users", () => console.log(9874));
app.get("/videos", () => console.log(9598));

const handleListening = () => {
  console.log(`server listening on port http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);

//port 설정
