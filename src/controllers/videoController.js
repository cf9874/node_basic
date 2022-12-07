import { EDIT, HOME, WATCH } from "../enum";
import Video from "../models/Video";

export const handleHome = (req, res) => {
  Video.find({}, (error, videoList) => {
    //database에서 data검색이 끝나야 rendering이 시작되므로
    //제일 마지막에 실행됨. 따라서 이 안에서 render 시켜줘야함
    //> database 검색이 끝나지 않았을 때 render되는 것을 막기 위함
    //외부에 어떤 코드를 써도 이 블록은 마지막이 실행됨.

    console.log("error", error);
    console.log("videoList", videoList);
    return res.render("home", {
      pageTitle: HOME,
      videoList: [],
    });
  });
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
