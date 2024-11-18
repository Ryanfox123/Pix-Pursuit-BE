const purusitsRouter = require("express").Router();

purusitsRouter
  .route("/")
  .get((req, res) => {
    res.status(200).send("all okay from GET /api/pursuits");
  })
  .post((req, res) => {
    res.status(200).send("all okay from POST /api/pursuits");
  });

purusitsRouter.get("/:pursuitID/user", (req, res) => {
  res.status(200).send("all okay from GET /api/:pursuitID/user");
});

purusitsRouter.get("/:pursuitID/host", (req, res) => {
  res.status(200).send("all okay from GET /api/:pursuitID/host");
});

purusitsRouter.patch("/:pursuitID", (req, res) => {
  res.status(200).send("all okay from PATCH /api/:pursuitID");
});

module.exports = purusitsRouter;
