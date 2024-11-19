const {
  selectHostedPursuitByPursuitId,
  selectUserPursuitByPursuitId,
} = require("../models/pursuits-model.js");
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
  selectUsers().then((users) => {
    res.status(200).send({ users: users });
  });
};

exports.postUsers = (req, res, next) => {
  insertUsers(req.body)
    .then((user) => {
      res.status(201).send({ user });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getUsersbyUsername = (req, res, next) => {
  const { username } = req.params;
  selectUsersByUsername(username)
    .then((user) => {
      res.status(200).send({ user: user });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getUsersPointsByPursuitId = (req, res, next) => {
  const { pursuitId } = req.params;

  selectUserPursuitByPursuitId(pursuitId)
    .then(() => {
      selectUsersPointsByPursuitId(pursuitId).then((users) => {
        res.status(200).send({ users });
      });
    })
    .catch((err) => {
      next(err);
    });
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
