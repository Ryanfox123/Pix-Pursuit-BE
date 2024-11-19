const seed = require(".db/seed");
const db = require("..db/connection.js");
const devData = require("../data/devData/index.js");

const runSeed = () => {
  return seed(devData).then(() => db.end());
};

runSeed();
