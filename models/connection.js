// DEPENDENCIES
require("dotenv").config();
const mongoose = require("mongoose");

// CONNECTION
mongoose.connect(process.env.DATABASE_URL);

// EXPORT
module.exports = mongoose;