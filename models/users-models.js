const format = require("pg-format");
const db = require("../db/connection.js");

exports.selectUsers = () => {
  const queryStr = `SELECT * FROM users`;
  return db.query(queryStr).then(({ rows }) => {
    return rows;
  });
};

exports.insertUsers = () => {};

exports.selectUsersByUsername = (username) => {
  return db
    .query(
      `SELECT * FROM users
    WHERE username = $1;`,
      [username]
    )
    .then((user) => {
      const userInfo = user.rows[0];
      if (!userInfo) {
        return Promise.reject({ status: 404, msg: "404: User not found" });
      }
      return {
        username: userInfo.username,
        points: userInfo.points,
        user_id: userInfo.user_id,
      };
    });
};

exports.selectUsersPointsByPursuitId = () => {};

exports.updateUsersPointsByUserId = () => {};

exports.updateUsersPursuitByUserId = () => {};

exports.inserUsersPursuitPoints = () => {};
