const app = require("express");
const { verifyToken, authorise } = require("../middlewares/auth");
const { pagination } = require("../middlewares/pagination");
const { BlogService } = require("../services/blog.service");
const router = app.Router();

const ApiService = {
  CreateBlog: async (req, res) => {
    const resp = await BlogService.CreateBlog(req);
    const { statusCode, ...respObj } = resp;
    return res.status(statusCode).send(respObj);
  },
  GetBlogs: async (req, res) => {
    const resp = await BlogService.GetBlogs(req);
    const { statusCode, ...respObj } = resp;
    res.status(statusCode).send(respObj);
  },
  GetBlogById: async (req, res) => {
    const resp = await BlogService.GetBlogById(req);
    const { statusCode, ...respObj } = resp;
    res.status(statusCode).send(respObj);
  },
  DeleteBlogById: async (req, res) => {
    const resp = await BlogService.DeleteBlogById(req);
    const { statusCode, ...respObj } = resp;
    res.status(statusCode).send(respObj);
  },
  UpdateBlogById: async (req, res) => {
    const resp = await BlogService.UpdateBlogById(req);
    const { statusCode, ...respObj } = resp;
    res.status(statusCode).send(respObj);
  }
};

router
  .post("/blog", verifyToken, authorise(["user"]), ApiService.CreateBlog)
  .get("/blog", verifyToken, authorise(["user", "admin"]), pagination, ApiService.GetBlogs)
  .get(
    "/blog/:id",
    verifyToken,
    authorise(["user", "admin"]),
    ApiService.GetBlogById
  )
  .delete(
    "/blog/:id",
    verifyToken,
    authorise(["user", "admin"]),
    ApiService.DeleteBlogById
  )
  .put(
    "/blog/:id",
    verifyToken,
    authorise(["user", "admin"]),
    ApiService.UpdateBlogById
  );
    

module.exports = router;
