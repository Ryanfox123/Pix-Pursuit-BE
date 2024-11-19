const purusitsRouter = require("express").Router();

const {
  getPursuits,
  postPursuit,
  getUserPursuitByPursuitId,
  getHostedPursuitByPursuitId,
  patchPursuitByPursuitId,
} = require("../controllers/pursuits-controllers");
const { selectPursuits } = require("../models/pursuits-model");

purusitsRouter.route("/").get(getPursuits).post(postPursuit);

purusitsRouter.get("/:pursuitID/user", getUserPursuitByPursuitId);

purusitsRouter.get("/:pursuitID/host", (req, res) => {
  //use getHostedPursuitByPursuitId here
  res.status(200).send("all okay from GET /api/:pursuitID/host");
});

purusitsRouter.patch("/:pursuitID", (req, res) => {
  //use patchPursuitByPursuitId
  res.status(200).send("all okay from PATCH /api/:pursuitID");
});

module.exports = purusitsRouter;
