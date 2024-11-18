const {
  selectUsers,
  insertUsers,
  selectUsersByUsername,
  selectUsersPointsByPursuitId,
  updateUsersPointsByUserId,
  updateUsersPursuitByUserId,
  inserUsersPursuitPoints,
} = require("../models/users-models.js");

exports.getUsers = (req, res, next) => {
  //use selectUsers in here
};

exports.postUsers = (req, res, next) => {
  //use insertUsers in here
};

exports.getUsersbyUsername = (req, res, next) => {
  const { username } = req.params;
  selectUsersByUsername(username)
    .then((user) => {
      res.status(200).send({ user: user });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

exports.getUsersPointsbyPursuitId = (req, res, next) => {
  //use selectUsersPointsByPursuitID in here
};

exports.patchUsersPointsByUserId = (req, res, next) => {
  // Use updateUsersPointsByUserId in here
};

exports.patchUsersPursuitByUserId = () => {
  //use updateUsersPursuitByUserId in here
};

exports.postUsersPursuitPoints = () => {
  //use inserUsersPursuitPoints in here
};
