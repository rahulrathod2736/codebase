const app = require("express");
const { DemoService } = require("../services/demo.service");
const router = app.Router();

const ApiService = {
  GetTestRoutes: async (req, res) => {
    const resp = await DemoService.getTestRoutes(req);
    const { statusCode, ...respObj } = resp;
    res.status(statusCode).send(respObj);
  },
};

router.get("/test-get", ApiService.GetTestRoutes);

module.exports = router;
