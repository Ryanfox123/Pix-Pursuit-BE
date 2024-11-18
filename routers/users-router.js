const usersRouter = require("express").Router();

usersRouter
  .route("/")
  .get((req, res) => {
    res.status(200).send("all okay from GET /api/users");
  })
  .post((req, res) => {
    res.status(200).send("all okay from POST /api/users");
  });

usersRouter.get("/:username", (req, res) => {
  res.status(200).send("all okay from GET /api/users/:username");
});

usersRouter.get("/points/:pursuitID", (req, res) => {
  res.status(200).send("all okay from GET /api/users/points/:pursuitID");
});

usersRouter.patch("/:userID/points", (req, res) => {
  res.status(200).send("all okay from GET /api/users/:userID/points");
});

usersRouter.patch("/:userID/pursuit", (req, res) => {
  res.status(200).send("all okay from GET /api/users/:userID/pursuit");
});

usersRouter.post("/password/:username", (req, res) => {
  res.status(200).send("all okay from GET /api/users/password/:username");
});

usersRouter.post("/pursuits/points", (req, res) => {
  res.status(200).send("all okay from GET /api/users/pursuits/points");
});

module.exports = usersRouter;
