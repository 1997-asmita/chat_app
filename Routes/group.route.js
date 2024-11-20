const express = require("express");
const groupRoute = express.Router();
const authToken = require("../Middleware/authToken");

groupRoute.post("/sendMessage", authToken);
groupRoute.get("/getMessages", authToken);
