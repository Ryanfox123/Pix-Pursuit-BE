const apiRouter = require("express").Router();
const usersRouter = require("./users-router");
const purusitsRouter = require("./pursuits-router");

apiRouter.use("/users", usersRouter);

apiRouter.use("/pursuits", purusitsRouter);

apiRouter.get("/", (req, res) => {
  res.status(200).send("All OK from /api");
});

module.exports = apiRouter;
