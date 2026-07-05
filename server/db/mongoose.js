const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log(`Database Connected ${conn.connection.port}`);
  } catch (err) {
    console.error(err);
  }
};

connectDB();

// Project Name = Portfolio Feedback
// email = za6968486@gmail.com
