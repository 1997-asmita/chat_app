const express = require("express");
const { userSignup, userSignin } = require("../Controllers/auth.controller");
const authRoute = express.Router();
const multer = require("multer");
const upload = multer();

authRoute.post("/signup", upload.single("attachment"), userSignup);
authRoute.post("/signin", userSignin);

module.exports = authRoute;
