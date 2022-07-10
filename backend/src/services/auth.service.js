const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const { Config } = require("../config");
const User = require("../models/user");

const errorObj = { success: false };

const AuthService = {
  RegisterUser: async (req) => {
    try {
      const { body } = req;
      const isExistUser = await User.findOne({ email: body.email }).count();
      if (isExistUser > 0) {
        errorObj.message = "User Email is already Registered";
        errorObj.statusCode = 400;
        return errorObj;
      }
      const password = bcrypt.hashSync(body.password, 8);
      const user = new User({ ...req.body, password });
      const resp = await user.save();
      return {
        statusCode: 200,
        message: "User Registration Successfully",
        success: true,
        data: resp,
      };
    } catch (err) {
      errorObj.message = err.message || "Something Went Wrong";
      errorObj.statusCode = 500;
      return errorObj;
    }
  },
  SignInUser: async (req) => {
    const { body } = req;
    const user = await User.findOne({ email: body.email });
    if (user._id) {
      const isMatch = await bcrypt.compare(body.password, user.password);
      if (!isMatch) {
        errorObj.message = "Password is Incorrect";
        errorObj.statusCode = 400;
        return errorObj;
      }
      const token = await jwt.sign(
        {
          _id: user._id,
          email: user.email,
          role: user.role,
        },
        Config.secretKey,
        { expiresIn: "2h" }
      );
      return {
        statusCode: 200,
        message: "SignIn Successfully",
        success: true,
        data: {
          token,
          role: user.role
        },
      };
    } else {
      errorObj.message = "Invalid Email or Password";
      errorObj.statusCode = 400;
      return errorObj;
    }
  }
    
};

module.exports = { AuthService };
