let usersData = [
  {
    id: 1,
    username: "Shubrotto",
    email: "skshuboto@gmail.com",
  },
  {
    id: 2,
    username: "jack",
    email: "jack@gmail.com",
  },
];

const User = {
  getAll() {
    return usersData;
  },
  getById(id) {
    return usersData.find((user) => user.id == id);
  },
  createUser(userData) {
    const newUser = { id: Date.now(), ...userData };
    usersData.push(newUser);
    return usersData;
  },
  updateUser(id, userData) {
    const index = usersData.findIndex((user) => user.id == id);
    if (index !== -1) {
      usersData[index] = { ...usersData[index], ...userData };
      return usersData[index];
    }
    return null;
  },
  deleteUser(id) {
    const index = usersData.findIndex((user) => user.id == id);
    if (index !== -1) {
      const deletedUser = usersData.splice(index, 1)[0];
      return deletedUser;
    }
    return null;
  },
};

module.exports = User;
