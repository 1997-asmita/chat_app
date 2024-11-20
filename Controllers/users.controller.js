const { errorMessage, successMessage } = require("../Services/status.service");
const { allUsers } = require("../Services/users.service");

const getAllUsers = async (req, res) => {
  try {
    let users = await allUsers({ is_deleted: false, deletedAt: null });

    return successMessage(res, users, "Fetch user successfully", 200);
  } catch (error) {
    console.log("error:", error);

    return errorMessage(res, error.message, 500);
  }
};

module.exports = { getAllUsers };
