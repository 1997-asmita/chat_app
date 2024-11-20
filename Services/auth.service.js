const db = require("../Models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

async function findUser(payload) {
  try {
    const getUser = await db.User.findOne(payload);
    return getUser;
  } catch (error) {
    throw error;
  }
}

async function encryptPassword(password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const convertPass = await bcrypt.hash(password, salt);
    return convertPass;
  } catch (error) {
    throw error;
  }
}

async function decryptPassword(password, encPass) {

  try {
    let decPassword = await bcrypt.compare(password, encPass);
    return decPassword;
  } catch (error) {
    throw error;
  }
}

async function generateAuthToken(payload) {
  try {
    const token = jwt.sign(payload, process.env.TOKEN_SECRET_KEY, {
      expiresIn: "1d",
    });
    return token;
  } catch (error) {
    throw error;
  }
}

async function createUser(payload) {
  try {
    const create = await db.User.create(payload);
    return create;
  } catch (error) {
    throw error;
  }
}

async function storeUserProfile(imageData) {
  try {
    const imagePath = path.join(__dirname, "..", "public", "profile");

    if (!fs.existsSync(imagePath)) {
      fs.mkdirSync(imagePath, { recursive: true });
    }
    const filePath = path.join(imagePath, imageData.originalname);
    let storeFile = fs.WriteStream(filePath);
    storeFile.write(imageData.buffer);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  findUser,
  encryptPassword,
  generateAuthToken,
  createUser,
  storeUserProfile,
  decryptPassword,
};
