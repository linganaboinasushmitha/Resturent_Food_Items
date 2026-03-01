// db.js
require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

async function connectDB() {
  try {
    await mongoose.connect(uri); // ✅ modern syntax, no deprecated options
    console.log('✅ Connected to MongoDB Atlas');
  } catch (err) {
    console.error('❌ MongoDB Atlas connection error:', err);
    process.exit(1);
  }
}

connectDB();

module.exports = mongoose;