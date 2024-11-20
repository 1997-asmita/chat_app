const { errorMessage, successMessage } = require("../Services/status.service");
const {
  findUser,
  encryptPassword,
  generateAuthToken,
  createUser,
  storeUserProfile,
  decryptPassword,
} = require("../Services/auth.service");

const userSignup = async (req, res) => {
  try {
    let usersDetails = JSON.parse(req.body.usersData);
    const checkExistingUser = await findUser({
      email: usersDetails.email,
      is_deleted: false,
    });

    if (checkExistingUser) {
      return errorMessage(res, "Found duplicate user", 500, "Error");
    }
    usersDetails.password = await encryptPassword(usersDetails.password);
    usersDetails.profileImage = req.file.originalname;

    const insertUser = await createUser(usersDetails);

    if (insertUser) {
      storeUserProfile(req.file);

      return successMessage(
        res,
        insertUser,
        "User created successfully",
        200,
        "Success"
      );
    }
  } catch (error) {
    return errorMessage(res, error.message, 500, "Error");
  }
};

const userSignin = async (req, res) => {
  try {
    let findCurrentUser = await findUser({
      email: req.body.email,
      is_deleted: false,
    });
    if (!findCurrentUser) {
      return errorMessage(res, "User not found", 500);
    }

    let checkPassword = await decryptPassword(
      req.body.password,
      findCurrentUser.password
    );


    if (!checkPassword) {
      return errorMessage(res, "Invalid email or password", 500);
    }

    let token = await generateAuthToken({
      id: findCurrentUser._id,
      email: findCurrentUser.email,
    });

    return successMessage(
      res,
      { findCurrentUser, token },
      "Logged in successfully",
      200,
      "Success"
    );
  } catch (error) {
    return errorMessage(res, error.message, 500, "Error");
  }
};

module.exports = { userSignup, userSignin };
