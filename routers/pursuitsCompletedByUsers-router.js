const {
  getUsersPointsByPursuitId,
  patchUsersPursuitByUserId,
  postUsersPursuitPoints,
} = require("../controllers/users-controllers");

const pursuitsCompletedByUsersRouter = require("express").Router();

pursuitsCompletedByUsersRouter.post("/", postUsersPursuitPoints);

pursuitsCompletedByUsersRouter
  .route("/:pursuitId")
  .get(getUsersPointsByPursuitId);

module.exports = pursuitsCompletedByUsersRouter;
