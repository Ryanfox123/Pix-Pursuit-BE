const seed = require("./seed");
const db = require("../connection.js");
const devData = require("../data/devData/index.js");

const runSeed = () => {
  return seed(devData).then(() => db.end());
};

runSeed();
