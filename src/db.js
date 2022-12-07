import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/study");

const db = mongoose.connection;

const handleOpen = () => {
  console.log("connect to DBs");
};

db.on("error", (e) => console.log("DB ERROR", e));
db.once("open", handleOpen);
