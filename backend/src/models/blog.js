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
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: Object.values(Constants.status),
    },
    category: {
      type: Types.ObjectId,
      ref: "Category",
    },
    author: {
      type: String,
      required: true,
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: { createdAt: "publishedDate", updatedAt: "modifyDate"}, versionKey: false,  }
);

module.exports = model("Blog", newSchema);
