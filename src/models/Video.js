//models에서는 각 데이터의 type을 정의함.(schema)
//Video.js에서는  video data의 data type을 정의함.

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  //   title: String, //<< 이런 표현도 가능
  title: { type: String },
  description: { type: String },
  createdAt: { type: Date },
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const video = {
  title: "heki",
  description: "asdasd",
  createdAt: Date.now(),
  hashtags: ["#hi", "#mongoDB"],
};

const videoModel = mongoose.model("Video", videoSchema);

export default videoModel;
