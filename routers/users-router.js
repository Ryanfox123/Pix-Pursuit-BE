const {
  patchUsersPointsByUserId,
  getUsersPointsByPursuitId,
  getUsersbyUsername,
  postUsersPursuitPoints,
  patchUsersPursuitByUserId,
} = require("../controllers/users-controllers");

const usersRouter = require("express").Router();

const { getUsers, postUsers } = require("../controllers/users-controllers");

usersRouter.route("/").get(getUsers).post(postUsers);

usersRouter.get("/:username", getUsersbyUsername);

usersRouter.get("/points/:pursuitId", getUsersPointsByPursuitId);

usersRouter.patch("/:userID/points", patchUsersPointsByUserId);

usersRouter.patch("/:userID/pursuit", patchUsersPursuitByUserId);

usersRouter.post("/password/:username", (req, res) => {
  //NO CONTROLLER OR MODEL NOT YET MADE
  res.status(200).send("all okay from GET /api/users/password/:username");
});

usersRouter.post("/pursuits/points", postUsersPursuitPoints);

module.exports = usersRouter;
