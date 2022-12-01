const mockUser = {
  username: "KIM",
  loggedIn: true,
};

export const handleJoin = (req, res) => {
  return res.send("Join : /join");
};

export const login = (req, res) => {
  return res.send("login : /login");
};

export const logout = (req, res) => {
  return res.send(`logout : ${req.url}`);
};
export const see = (req, res) => {
  return res.send(`see : ${req.url}`);
};

export const handleEditUser = (req, res) => {
  return res.send("Edit User : /users/edit");
};
//컨트롤러
export const deleteUser = (req, res) => {
  return res.send("Delete User : /users/delete");
};
