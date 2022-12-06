import { EDIT, HOME, WATCH } from "../enum";
const videoList = [
  {
    id: 1,
    title: "Titanic",
    year: 1990,
    rating: 4.5,
    comments: 2,
    views: 8000,
  },
  {
    id: 2,
    title: "Avartar",
    year: 2011,
    rating: 4.8,
    comments: 3,
    views: 541560,
  },
  {
    id: 3,
    title: "Avengers",
    year: 2014,
    rating: 4.9,
    comments: 200,
    views: 561894562,
  },
  {
    id: 4,
    title: "The Chaser",
    year: 2008,
    rating: 5.0,
    comments: 1856,
    views: 15263189,
  },
];
export const handleHome = (req, res) => {
  return res.render("home", {
    pageTitle: HOME,
    videoList,
  });
};

export const search = (req, res) => {
  return res.send(`Search Video : ${req.url} `);
};

export const watchVideo = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const video = videoList[id - 1];
  return res.render("watch", {
    id,
    pageTitle: WATCH,
    video,
  });
};

export const editVideo = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const video = videoList[id - 1];
  return res.render("edit", { pageTitle: EDIT, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  console.log(9797, id);
  console.log(req.body);
  const { title } = req.body;
  videoList[id - 1].title = title;
  //Mock data를 사용하고 있기 때문에 임시로

  return res.redirect(`/videos/${id}`);
};

export const uploadVideo = (req, res) => {
  return res.send(`Upload Video : ${req.url} `);
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send(`Delete Video : ${req.url} `);
};
