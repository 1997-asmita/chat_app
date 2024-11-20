const express = require("express");
const chatRoute = express.Router();
const authToken = require("../Middleware/authToken");
const {
  sendSingleMessage,
  getOneToOneUserMessages,
} = require("../Controllers/oneToOneMessage.controller");

chatRoute.post("/sendMessage", authToken, sendSingleMessage);
chatRoute.get("/getMessages", authToken, getOneToOneUserMessages);

module.exports = chatRoute;
