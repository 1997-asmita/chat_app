const express = require("express");
const usersRoute = express.Router();
const { getAllUsers } = require("../Controllers/users.controller");
const authToken = require("../Middleware/authToken");

usersRoute.get("/getAll", authToken, getAllUsers);

module.exports = usersRoute;
