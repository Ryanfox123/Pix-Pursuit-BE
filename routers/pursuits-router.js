const purusitsRouter = require("express").Router();

const {
  getPursuits,
  postPursuit,
  getUserPursuitByPursuitId,
  getHostedPursuitByPursuitId,
  patchPursuitByPursuitId,
  getHostedPursuitByHostId,
} = require("../controllers/pursuits-controllers");
const { selectPursuits } = require("../models/pursuits-model");

purusitsRouter.route("/").get(getPursuits).post(postPursuit);

purusitsRouter.get("/:pursuitID/user", getUserPursuitByPursuitId);

purusitsRouter.get("/:hostID/host", getHostedPursuitByHostId);

purusitsRouter.patch("/:pursuitID", (req, res) => {
  //use patchPursuitByPursuitId
  res.status(200).send("all okay from PATCH /api/:pursuitID");
});

module.exports = purusitsRouter;
