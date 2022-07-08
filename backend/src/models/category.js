const mongoose = require("mongoose");
const { Constants } = require("../constants");

const { Schema, model, Types } = mongoose;


const newSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Category", newSchema);
