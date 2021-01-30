const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DataBase is Connected to MongoDB".green.bold);
  } catch (error) {
    console.error(error.message.red.bold);
    process.exit(1);
  }
};
module.exports = connectDB;
