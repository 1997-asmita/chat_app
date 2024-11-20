const mongoose = require("mongoose");

const connection = async () => {
  try {
    mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.dsjxl.mongodb.net/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("DB connected successfully");
  } catch (error) {
    console.log("Error in db connection:", error);
  }
};

module.exports = connection;
