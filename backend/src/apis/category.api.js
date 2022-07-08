const app = require("express");
const { CategoryService } = require("../services/category.service");
const router = app.Router();

const ApiService = {
  CreateCategory: async (req, res) => {
    const resp = await CategoryService.CreateCategory(req);
    const { statusCode, ...respObj } = resp;
    res.status(statusCode).send(respObj);
  },
  GetAllCategory: async (req, res) => {
    const resp = await CategoryService.GetAllCategory(req);
    const { statusCode, ...respObj } = resp;
    res.status(statusCode).send(respObj);
  },
};

router
  .post("/category", ApiService.CreateCategory)
  .get("/category", ApiService.GetAllCategory);

module.exports = router;
