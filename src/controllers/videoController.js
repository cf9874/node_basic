import { EDIT, HOME, WATCH } from "../enum";

export const handleHome = (req, res) => {
  return res.render("home", {
    pageTitle: HOME,
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
