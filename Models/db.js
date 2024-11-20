let db = {};

db.User = require("./users.model");
db.chats = require("./chats.model");
db.groupChats = require("./groups.model");
db.socket = require("./socket.model");

module.exports = db;
