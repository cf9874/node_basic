import { HOME, WATCH } from "../enum";

const mockUser = {
  username: "Kim",
  id: "cf9874",
  email: "cf9874@gmail.com",
  loggedIn: true,
};

export const recommendedVideos = (req, res) => res.render("home", { pageTitle: HOME, mockUser });

export const watchVideo = (req, res) => res.render("watch", { pageTitle: WATCH });
export const editVideo = (req, res) => {
  console.log(req.params);
  return res.send(`Edit Video ${req.params.id}`);
};
export const removeVideo = (req, res) => res.send("Delete Video");
export const searchVideo = (req, res) => res.send("Search Video");
export const uploadVideo = (req, res) => res.send("Upload Video");
