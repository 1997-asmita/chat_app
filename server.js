const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db_config = require("./DB_Config/Connection");
const db = require("./Models/db");
const fs = require("fs");
const allRoutes = require("./Routes/index");
const path = require("path");
db_config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//global route
app.use(
  "/api/images",
  express.static(path.join(__dirname, "public", "profile"))
);
app.use("/api", allRoutes);

//file store path
if (!fs.existsSync("public")) {
  fs.mkdirSync("public", { recursive: true });
}

module.exports = app;
