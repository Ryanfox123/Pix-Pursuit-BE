const express = require("express");
const apiRouter = require("./routers/api-router");

const app = express();

app.use("/api", apiRouter);

// app.listen(9090, () => {
//   console.log(`Example app listening on port 9090`);
// });

module.exports = app;
