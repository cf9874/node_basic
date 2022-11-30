export const handleHome = (req, res) => {
  return res.send("Home, recommend video : /");
};

export const search = (req, res) => {
  return res.send(`Search Video : ${req.url} `);
};

export const watchVideo = (req, res) => {
  return res.send(`Watch Video : ${req.url} `);
};

export const editVideo = (req, res) => {
  return res.send(`Edit Video : ${req.url} `);
};

export const uploadVideo = (req, res) => {
  return res.send(`Upload Video : ${req.url} `);
};

export const deleteVideo = (req, res) => {
  return res.send(`Delete Video : ${req.url} `);
};
