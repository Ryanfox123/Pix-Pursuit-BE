exports.customErrors = (err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
};

exports.sqlErrors = (err, req, res, next) => {
  if (err.code === "23502") {
    return res
      .status(400)
      .send({ msg: "Bad request: You are missing body information" });
  }
  if (err.code === "22P02") {
    return res.status(400).send({ msg: "400: Invalid request" });
  }
  console.log("uncaught error >> ", err);
  res.status(500).send({});
};
