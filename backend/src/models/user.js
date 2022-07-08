const mongoose = require("mongoose");
const { Constants } = require("../constants");

const { Schema, model, Types } = mongoose;

// {
//     "firstName": "Rahul",
//     "lastName": "gamehers",
//     "email": "rahulrathod2736@gmail.com",
//     "dob": "2022-07-07T15:03:12+05:30",
//     "password": "RAHUL@3707"
// }

const newSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    dob: {
      type: Date,
    },
    password: {
      type: String,
      required: true,
      lowercase: true,
    },
    role: {
      type: String,
      default: Constants.userRole.USER,
      enum: Object.values(Constants.userRole),
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("User", newSchema);

