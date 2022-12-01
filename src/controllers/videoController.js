import { EDIT, HOME, WATCH } from "../enum";
const videoList = [
  {
    title: "Titanic",
    year: 1990,
    rating: 4.5,
    comments: 2,
    views: 8000,
  },
  {
    title: "Avartar",
    year: 2011,
    rating: 4.8,
    comments: 3,
    views: 541560,
  },
  {
    title: "Avengers",
    year: 2014,
    rating: 4.9,
    comments: 200,
    views: 561894562,
  },
  {
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
  console.log(req.params);
  return res.render("watch", {
    pageTitle: WATCH,
  });
};

export const editVideo = (req, res) => {
  console.log(req.params);
  return res.render("edit" < { pageTitle: EDIT });
};

export const uploadVideo = (req, res) => {
  return res.send(`Upload Video : ${req.url} `);
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send(`Delete Video : ${req.url} `);
};
