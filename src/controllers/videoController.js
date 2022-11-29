import { HOME, WATCH } from "../enum";

const mockUser = {
  username: "Kim",
  id: "cf9874",
  email: "cf9874@gmail.com",
  loggedIn: true,
};

export const recommendedVideos = (req, res) => {
  const videoList = [
    { id: 1, title: "titanic", rate: 5.0, year: 1980, views: 123, createdAt: "2 minutes ago" },
    { id: 2, title: "avengers", rate: 4.8, year: 2014, views: 123, createdAt: "2 minutes ago" },
    { id: 3, title: "avartar", rate: 4.7, year: 2010, views: 123, createdAt: "2 minutes ago" },
    { id: 4, title: "The chaser", rate: 4.9, year: 2010, views: 800, createdAt: "6 minutes ago" },
  ];

  return res.render("home", { pageTitle: HOME, mockUser, videoList });
};

export const watchVideo = (req, res) => res.render("watch", { pageTitle: WATCH });
export const editVideo = (req, res) => {
  console.log(req.params);
  return res.send(`Edit Video ${req.params.id}`);
};
export const removeVideo = (req, res) => res.send("Delete Video");
export const searchVideo = (req, res) => res.send("Search Video");
export const uploadVideo = (req, res) => res.send("Upload Video");
