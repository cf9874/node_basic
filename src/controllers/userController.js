export const handleJoin = (req, res) => res.send("Join : /join");

export const handleEditUser = (req, res) => {
  return res.send("Edit User : /users/edit");
};
//컨트롤러
export const handleDeleteUser = (req, res) => {
  return res.send("Delete User : /users/delete");
};
