export const join = (req, res) => res.render("home");
export const login = (req, res) => res.send("login us!");
export const logout = (req, res) => res.send("logout");

export const seeUser = (req, res) => res.send("See User");
export const editUser = (req, res) => res.send("Edit User");
export const deleteUser = (req, res) => res.send("Delete User");
