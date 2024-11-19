const db = require("../db/connection.js");
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

exports.updatePursuitByPursuitId = (id, { active }) => {
  if (active && typeof active !== "boolean") {
    return Promise.reject({ status: 400, msg: "active my be type bool" });
  }
  return db
    .query(
      `UPDATE pursuits
      SET active = $2
      WHERE pursuit_id = $1
      RETURNING *`,
      [id, active]
    )
    .then(({ rows }) => {
      if (rows.length === 0) {
        return Promise.reject({
          status: 404,
          msg: "404: Pursuit does not exist",
        });
      }
      return rows[0];
    });
};

exports.selectHostedPursuitByHostId = (id) => {
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
