const express = require("express");
const apiRouter = require("./routers/api-router");
const { customErrors } = require("./error-handler");

const app = express();

app.use("/api", apiRouter);

app.use(customErrors);
// app.use(sqlErrors);

module.exports = app;
