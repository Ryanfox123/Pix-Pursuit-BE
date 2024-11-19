const {
  patchUsersPointsByUserId,
  getUsersPointsByPursuitId,
  getUsersbyUsername,
  postUsersPursuitPoints,
  postUsersAuth,
} = require("../controllers/users-controllers");

const usersRouter = require("express").Router();

const { getUsers, postUsers } = require("../controllers/users-controllers");

usersRouter.route("/").get(getUsers).post(postUsers);

usersRouter.get("/:username", getUsersbyUsername);

usersRouter.get("/points/:pursuitId", getUsersPointsByPursuitId);

usersRouter.patch("/:userID/points", patchUsersPointsByUserId);

usersRouter.patch("/:userID/pursuit", (req, res) => {
  //use patchUsersPursuitByUserId in here
  res.status(200).send("all okay from GET /api/users/:userID/pursuit");
});

usersRouter.post("/login", postUsersAuth);

usersRouter.post("/pursuits/points", postUsersPursuitPoints);

module.exports = usersRouter;
