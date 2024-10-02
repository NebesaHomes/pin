const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/pin');


const UserSchema = new mongoose.Schema({
  username: String, 
  name: String,
  email: String,
  password: String,
  profileImage: String, 
  contact: String,  // Change this to String instead of Number
  boards: {
    type: Array,
    default: []
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"post"
  }]
});

UserSchema.plugin(plm);  // Passport-local-mongoose plugin

module.exports = mongoose.model('user', UserSchema);
