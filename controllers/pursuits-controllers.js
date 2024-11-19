const {
  selectPursuits,
  selectHostedPursuitByPursuitId,
  selectUserPursuitByPursuitId,
  insertPursuit,
  updatePursuitByPursuitId,
} = require("../models/pursuits-model");

exports.getPursuits = (req, res, next) => {
  selectPursuits()
    .then((pursuits) => {
      res.status(200).send({ pursuits: pursuits });
    })
    .catch((err) => {
      next(err);
    });
};

exports.postPursuit = (req, res, next) => {
  //use insertPursuit in here
};

exports.getUserPursuitByPursuitId = (req, res, next) => {
  const { pursuitID } = req.params;
  selectUserPursuitByPursuitId(pursuitID)
    .then((pursuit) => {
      res.status(200).send({ pursuit: pursuit });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getHostedPursuitByPursuitId = (req, res, next) => {
  //use selectHostedPursuitByPursuitId in here
};

exports.patchPursuitByPursuitId = (req, res, next) => {
  //use updatePursuitByPursuitId in here
};
