import { EDIT, HOME, WATCH } from "../enum";
import Video from "../models/Video";

export const handleHome = async (req, res) => {
  try {
    const videos = await Video.find({});

    // callback과 달리 DB에서 결과값을 받아올 때 까지
    // 다음 실행을 기다림

    return res.render("home", {
      pageTitle: HOME,
      videoList: videos,
    });
  } catch (error) {
    console.log(error);
    // return res.render("server-error");
  }
};

export const search = (req, res) => {
  return res.send(`Search Video : ${req.url} `);
};

export const watchVideo = (req, res) => {
  const { id } = req.params;
  console.log(id);

  return res.render("watch", {
    id,
    pageTitle: WATCH,
  });
};

export const editVideo = (req, res) => {
  const { id } = req.params;
  console.log(id);

  return res.render("edit", {
    pageTitle: EDIT,
  });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  console.log(9797, id);
  console.log(req.body);
  const { title } = req.body;

  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Post Video" });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  console.log(8282, title);

  return res.redirect("/");
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send(`Delete Video : ${req.url} `);
};
