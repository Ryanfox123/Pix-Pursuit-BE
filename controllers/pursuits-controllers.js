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
  const body = req.body;
  insertPursuit(body)
    .then((pursuit) => {
      res.status(200).send({ pursuit: pursuit });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

exports.getUserPursuitByPursuitId = (req, res, next) => {
  const { pursuitID } = req.params;
  selectUserPursuitByPursuitId(pursuitID)
    .then((pursuit) => {
      res.status(200).send({ pursuit: pursuit });
    })
    .catch((err) => {
      console.log(err.code);
      next(err);
    });
};

exports.getHostedPursuitByPursuitId = (req, res, next) => {
  //use selectHostedPursuitByPursuitId in here
};

exports.patchPursuitByPursuitId = (req, res, next) => {
  //use updatePursuitByPursuitId in here
};
