const purusitsRouter = require("express").Router();

const {
  getPursuits,
  postPursuit,
  getUserPursuitByPursuitId,
  getHostedPursuitByPursuitId,
  patchPursuitByPursuitId,
} = require("../controllers/pursuits-controllers");
const { selectPursuits } = require("../models/pursuits-model");

purusitsRouter
  .route("/")
  .get(getPursuits)
  .post((req, res) => {
    //use postPursuit here
    res.status(200).send("all okay from POST /api/pursuits");
  });

purusitsRouter.get("/:pursuitID/user", getUserPursuitByPursuitId);

purusitsRouter.get("/:pursuitID/host", (req, res) => {
  //use getHostedPursuitByPursuitId here
  res.status(200).send("all okay from GET /api/:pursuitID/host");
});

purusitsRouter.patch("/:pursuitID", patchPursuitByPursuitId);

module.exports = purusitsRouter;
