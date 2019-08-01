const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const membersRouter = require("../member/member-router");
const usersRouter = require("../users/user-router");
const groupRouter = require("../group/group-router");
const eventsRouter = require("../events/events-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/member", membersRouter);
server.use("/user", usersRouter);
server.use("/group", groupRouter);
server.use("/event", eventsRouter);

server.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Production of Event Planner"
  });
});

module.exports = server;
