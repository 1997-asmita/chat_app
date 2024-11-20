const express = require("express");
const allRoutes = express();
const authRoute = require("./auth.route");
const usersRoute = require("./users.route");
const chatRoute = require("./chats.route");

allRoutes.use("/auth", authRoute);
allRoutes.use("/user", usersRoute);
allRoutes.use("/chat", chatRoute);

module.exports = allRoutes;
