const app = require("express");
const { AuthService } = require("../services/auth.service");
const router = app.Router();

const ApiService = {
  RegisterUser: async (req, res) => {
    const resp = await AuthService.RegisterUser(req);
    const { statusCode, ...respObj } = resp;
    res.status(statusCode).send(respObj);
  },
  SignInUser: async (req, res) => {
    const resp = await AuthService.SignInUser(req);
    const { statusCode, ...respObj } = resp;
    res.status(statusCode).send(respObj);
  },
};

router
  .post("/register", ApiService.RegisterUser)
  .post("/signin", ApiService.SignInUser);

module.exports = router;
