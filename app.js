const express = require("express");
const apiRouter = require("./routers/api-router");
const { customErrors, sqlErrors } = require("./error-handler");

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.use(customErrors);
app.use(sqlErrors);

module.exports = app;
