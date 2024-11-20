const jwt = require("jsonwebtoken");
const { errorMessage } = require("../Services/status.service");
const { findUser } = require("../Services/auth.service");

const authToken = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return errorMessage(res, "Please provide token", 500);
    }

    let token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return errorMessage(res, "Token is not provided", 500);
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, async (error, decoded) => {
      if (error) {
        return errorMessage(res, error.message, 500);
      }

      let findCurrentUser = await findUser({
        _id: decoded.id,
        email: decoded.email,
        is_deleted: false,
      });

      if (!findCurrentUser) {
        return errorMessage(res, "User is not authorized", 400);
      }

      req.body.loginUserId = decoded.id;
      req.body.loginUserEmail = decoded.email;
      next();
    });
  } catch (error) {
    return errorMessage(res, error.message, 500);
  }
};

module.exports = authToken;
