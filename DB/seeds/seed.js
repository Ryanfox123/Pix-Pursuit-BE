const db = require("../connection");

const seed = () => {
  return db
    .query(`DROP TABLE IF EXISTS pursuits;`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS completed_pursuits;`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS participants;`);
    })
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS users`);
    })
    .then(() => {
      return db.query(`CREATE TABLE users (
        user_ID SERIAL PRIMARY KEY,
        email VARCHAR(60) NOT NULL,
        password VARCHAR(20) NOT NULL,
        username VARCHAR(20) NOT NULL,
        points INT DEFAULT 0
        );`);
    })
    .then(() => {
      return db.query(`CREATE TABLE participants (
            user_ID INT REFERENCES users(user_ID) NOT NULL,
            pursuit_ID INT REFERENCES pursuits(pursuit_ID) NOT NULL
            )`);
    })
    .then(() => {
      return db.query(`CREATE TABLE hunts (
        pursuit_ID SERIAL PRIMARY KEY,
        host_ID INT NOT NULL REFERENCES users(user_ID) ON DELETE CASCADE,
        image VARCHAR(200) NOT NULL,
        target_lat INT NOT NULL,
        target_long INT NOT NULL,
        random_lat INT NOT NULL,
        random_long INT NOT NULL,
        difficulty VARCHAR(6) NOT NULL,
        completions INT DEFAULT 0,
        active BOOLEAN NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        title VARCHAR(100)
        );`);
    })
    .then(() => {
      return db.query(`CREATE TABLE completed_pursuits (
            pursuit_ID INT REFERENCES pursuits(pursuit_ID) NOT NULL,
            user_ID INT REFERENCES users(user_ID) NOT NULL,
            points INT NOT NULL
            )`);
    });
};

module.exports = seed;
