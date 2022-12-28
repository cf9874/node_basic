import { EDIT, HOME, WATCH } from "../enum";
import Video from "../models/Video";

const fakeUser = {
  username: "kim",
  loggedIn: false,
};

const videos = [
  {
    title: "abdasdwc",
    rating: 4,
    comments: 2521856,
    createdAt: "2 minutes ago",
    views: 595496,
    id: 1,
  },
  {
    title: "abasdsdc",
    rating: 4,
    comments: 5418612,
    createdAt: "2 minutes ago",
    views: 5541869,
    id: 2,
  },
  {
    title: "aaasdsc",
    rating: 4,
    comments: 126352,
    createdAt: "2 minutes ago",
    views: 59508548,
    id: 3,
  },
  {
    title: "abc1asd56as41213as",
    rating: 4,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 4,
  },
];

export const handleHome = async (req, res) => {
  try {
    // const videos = await Video.find({});

    // callback과 달리 DB에서 결과값을 받아올 때 까지
    // 다음 실행을 기다림

    return res.render("home", {
      pageTitle: HOME,
      videos,
      fakeUser,
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
