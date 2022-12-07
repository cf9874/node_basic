import "./db";
//file 자체를 import 하고 서버가 이 line을 보는 순간
//서버가 mongo에 연결됨
import "./models/Video";
import app from "./server";

const PORT = 4000;

const handleListening = () => {
  console.log(`server listening on port http://localhost:${PORT}`);
};

//port 설정
app.listen(PORT, handleListening);
