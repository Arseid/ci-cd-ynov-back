const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Connected to mongo server.');
}

module.exports = connectDB;