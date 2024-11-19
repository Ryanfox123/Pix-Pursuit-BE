const db = require("../db/connection");
const format = require("pg-format");

exports.selectPursuits = () => {
  return db.query("SELECT * FROM pursuits;").then((res) => {
    return res.rows;
  });
};

exports.insertPursuit = (body) => {
  const newBody = [
    body.host_ID,
    body.image,
    body.targetLat,
    body.targetLong,
    body.randomLat,
    body.randomLong,
    body.difficulty,
    body.active,
    body.title,
  ];
  const postPursuitStr = format(
    `INSERT INTO pursuits 
(host_ID, image, target_lat, target_long, random_lat, random_long, difficulty, active, title)
VALUES %L
RETURNING *;
`,
    [newBody]
  );

  return db.query(postPursuitStr).then((response) => {
    return response.rows[0];
  });
};

exports.updatePursuitByPursuitId = () => {};

exports.selectHostedPursuitByHostId = (id) => {
  console.log(id);
  return db
    .query(
      `SELECT * FROM pursuits
  WHERE host_ID = $1
  AND active = true;`,
      [id]
    )
    .then((res) => {
      if (!res.rows[0]) {
        return Promise.reject({
          status: 404,
          msg: "No active pursuits linked to this host",
        });
      }
      return res.rows[0];
    });
};

exports.selectUserPursuitByPursuitId = (id) => {
  return db
    .query(
      `SELECT * FROM pursuits 
    WHERE pursuit_ID = $1`,
      [id]
    )
    .then((pursuit) => {
      if (!pursuit.rows[0]) {
        return Promise.reject({ status: 404, msg: "404: Pursuit not found" });
      }
      return pursuit.rows[0];
    });
};
