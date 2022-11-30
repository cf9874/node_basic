export const handleHome = (req, res) => {
  return res.send("Home, recommend video : /");
};

export const search = (req, res) => {
  return res.send(`Search Video : ${req.url} `);
};

export const watchVideo = (req, res) => {
  console.log(req.params);
  return res.send(`Watch Video # ${req.params.id} `);
};

export const editVideo = (req, res) => {
  console.log(req.params);
  return res.send(`Edit Video : ${req.url} `);
};

export const uploadVideo = (req, res) => {
  return res.send(`Upload Video : ${req.url} `);
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send(`Delete Video : ${req.url} `);
};
