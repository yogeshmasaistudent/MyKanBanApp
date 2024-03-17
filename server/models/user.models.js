// const mongoose = require("mongoose");

// // Kan banUser Model Schema =>
// const UserSchema = mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   email:{
//     type: String,
//     required: true,
//     unique:true
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   DOB:{
//     type:Date,
//     required:true,
//   },
//   role: {
//     type: String,
//     enum: ["admin", "User"],
//     default: "User",
//   },
// });

// const UserModel = mongoose.model("user", UserSchema);

// module.exports = {
//   UserModel,
// };



const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    DOB: {
      type: Date,
    },
    role: {
      type: String,
      enum: ["admin", "explorer"],
      default: "explorer",
    },
    location: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };

// done