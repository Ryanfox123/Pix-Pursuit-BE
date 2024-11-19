const {
  patchUsersPointsByUserId,
  getUsersPointsByPursuitId,
  getUsersbyUsername,
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

usersRouter.post("/password/:username", (req, res) => {
  //NO CONTROLLER OR MODEL NOT YET MADE
  res.status(200).send("all okay from GET /api/users/password/:username");
});

usersRouter.post("/pursuits/points", (req, res) => {
  //use postUsersPursuitPoints in here
  res.status(200).send("all okay from GET /api/users/pursuits/points");
});

module.exports = usersRouter;
