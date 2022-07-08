const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const { Config } = require("../config");
const Category = require("../models/category");

const errorObj = { success: false };

const CategoryService = {
  CreateCategory: async (req) => {
    try {
      const { body } = req;
      const category = new Category(body);
      const resp = await category.save();
      return {
        statusCode: 200,
        message: "Category Created Successfully",
        success: true,
        data: resp,
      };
    } catch (err) {
      errorObj.message = err.message || "Something Went Wrong";
      errorObj.statusCode = 500;
      return errorObj;
    }
  },
  GetAllCategory: async (req) => {
    try {
      const { body } = req;
      const resp = await Category.find({});
      return {
        statusCode: 200,
        message: "Category Gets Successfully",
        success: true,
        data: resp,
      };
    } catch (err) {
      errorObj.message = err.message || "Something Went Wrong";
      errorObj.statusCode = 500;
      return errorObj;
    }
  },
};

module.exports = { CategoryService };
