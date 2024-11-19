const purusitsRouter = require("express").Router();

const {
  getPursuits,
  postPursuit,
  getUserPursuitByPursuitId,
  patchPursuitByPursuitId,
  getHostedPursuitByHostId,
} = require("../controllers/pursuits-controllers");

purusitsRouter.route("/").get(getPursuits).post(postPursuit);

purusitsRouter.get("/:pursuitID/user", getUserPursuitByPursuitId);

purusitsRouter.get("/:hostID/host", getHostedPursuitByHostId);

purusitsRouter.patch("/:pursuitID", patchPursuitByPursuitId);

module.exports = purusitsRouter;
