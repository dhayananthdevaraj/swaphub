const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    default : () => new mongoose.Types.ObjectId(),  // Auto-generate ObjectId
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true, // Remove leading and trailing whitespaces
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, // Convert to lowercase
 
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum length of the password
    maxlength: 255, // Maximum length of the password
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
