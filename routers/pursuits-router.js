const purusitsRouter = require("express").Router();

const {
  getPursuits,
  postPursuit,
  getUserPursuitByPursuitId,
  getHostedPursuitByPursuitId,
  patchPursuitByPursuitId,
} = require("../controllers/pursuits-controllers");

purusitsRouter
  .route("/")
  .get((req, res) => {
    //use getPursuits here
    res.status(200).send("all okay from GET /api/pursuits");
  })
  .post((req, res) => {
    //use postPursuit here
    res.status(200).send("all okay from POST /api/pursuits");
  });

purusitsRouter.get("/:pursuitID/user", (req, res) => {
  //use getUserPursuitByPursuitId here
  res.status(200).send("all okay from GET /api/:pursuitID/user");
});

purusitsRouter.get("/:pursuitID/host", (req, res) => {
  //use getHostedPursuitByPursuitId here
  res.status(200).send("all okay from GET /api/:pursuitID/host");
});

purusitsRouter.patch("/:pursuitID", (req, res) => {
  //use patchPursuitByPursuitId
  res.status(200).send("all okay from PATCH /api/:pursuitID");
});

module.exports = purusitsRouter;
