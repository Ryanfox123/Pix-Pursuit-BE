const {
  patchUsersPointsByUserId,
  getUsersPointsByPursuitId,
  getUsersbyUsername,
  postUsersPursuitPoints,
  postUsersAuth,
  patchUsersPursuitByUserId,

} = require("../controllers/users-controllers");

const usersRouter = require("express").Router();

const { getUsers, postUsers } = require("../controllers/users-controllers");

usersRouter.route("/").get(getUsers).post(postUsers);

usersRouter.get("/:username", getUsersbyUsername);

usersRouter.get("/points/:pursuitId", getUsersPointsByPursuitId);

usersRouter.patch("/:userID/points", patchUsersPointsByUserId);

usersRouter.patch("/:userID/pursuit", patchUsersPursuitByUserId);

usersRouter.post("/login", postUsersAuth);

usersRouter.post("/pursuits/points", postUsersPursuitPoints);

module.exports = usersRouter;
