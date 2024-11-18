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
  //use selectUsersByUsername in here
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
