export const recommendedVideos = (req, res) => res.send("Homepage Videos");

export const watchVideo = (req, res) => res.send("Watch Video");
export const editVideo = (req, res) => {
  console.log(req.params);
  return res.send(`Edit Video ${req.params.id}`);
};
export const removeVideo = (req, res) => res.send("Delete Video");
export const searchVideo = (req, res) => res.send("Search Video");
export const uploadVideo = (req, res) => res.send("Upload Video");
