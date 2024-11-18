const devData = require("../data/devData");
const seed = require("./seed");
const db = require("../connection.js");

const runSeed = () => {
  return seed(devData).then(() => db.end());
};

runSeed();
