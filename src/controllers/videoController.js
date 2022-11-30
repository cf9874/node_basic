export const handleHome = (req, res) => res.send("Home, recommend video : /");

export const handleWatchVideo = (req, res) => {
  return res.send("Watch Video : /videos/watch");
};
export const handleEditVideo = (req, res) => {
  return res.send("Edit Video : /videos/edit");
};
