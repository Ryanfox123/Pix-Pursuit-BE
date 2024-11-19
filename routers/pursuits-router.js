const purusitsRouter = require("express").Router();

const {
  getPursuits,
  postPursuit,
  getUserPursuitByPursuitId,
  patchPursuitByPursuitId,
  getHostedPursuitByHostId,
} = require("../controllers/pursuits-controllers");

purusitsRouter.route("/").get(getPursuits).post(postPursuit);

purusitsRouter.get("/host/:hostID", getHostedPursuitByHostId);

purusitsRouter
  .route("/:pursuitID")
  .get(getUserPursuitByPursuitId)
  .patch(patchPursuitByPursuitId);

module.exports = purusitsRouter;
