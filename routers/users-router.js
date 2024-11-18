const usersRouter = require("express").Router();

const { getUsers } = require("../controllers/users-controllers");

usersRouter
  .route("/")
  .get(getUsers)
  .post((req, res) => {
    // use postUsers in here
    res.status(200).send("all okay from POST /api/users");
  });

usersRouter.get("/:username", (req, res) => {
  // use getUsersbyUsername in here
  res.status(200).send("all okay from GET /api/users/:username");
});

usersRouter.get("/points/:pursuitID", (req, res) => {
  // use getUsersPointsbyPursuitId in here
  res.status(200).send("all okay from GET /api/users/points/:pursuitID");
});

usersRouter.patch("/:userID/points", (req, res) => {
  //use patchUsersPointsByUserId in here
  res.status(200).send("all okay from GET /api/users/:userID/points");
});

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
