const Blog = require("../models/blog");

const errorObj = { success: false };

const BlogService = {
  CreateBlog: async (req) => {
    try {
      const { body, user } = req;
      const blog = new Blog({ ...body, user: user._id });
      const resp = await blog.save();
      return {
        statusCode: 200,
        message: "Blog Created Successfully",
        success: true,
        data: resp,
      };
    } catch (err) {
      errorObj.message = err.message || "Something Went Wrong";
      errorObj.statusCode = 500;
      return errorObj;
    }
  },
  GetBlogs: async (req) => {
    try {
      const { user, pagination: {page, limit} } = req;
      const filter = {};
      if (user.role === "user") {
        filter.user = user._id;
      }
      const resp = await Blog.find(filter).populate("category", "title").skip((page-1)*limit).limit(limit);
      const count = await Blog.find(filter).count();
      return {
        statusCode: 200,
        message: "Blog Gets Successfully",
        success: true,
        data: { totalCount: count, page, data: resp },
      };
    } catch (err) {
      errorObj.message = err.message || "Something Went Wrong";
      errorObj.statusCode = 500;
      return errorObj;
    }
  },
  GetBlogById: async (req) => {
    try {
      const {
        user,
        params: { id },
      } = req;
      const filter = { _id: id };
      if (user?.role === "user");
      {
        filter.user = user._id;
      }
      const resp = await Blog.find(filter).populate("category", "title");
      return {
        statusCode: 200,
        message: "Blog Gets Successfully",
        success: true,
        data: resp,
      };
    } catch (err) {
      errorObj.message = err.message || "Something Went Wrong";
      errorObj.statusCode = 500;
      return errorObj;
    }
  },
  DeleteBlogById: async (req) => {
    try {
      const {
        user,
        params: { id },
      } = req;
      const filter = { _id: id };
      if (user?.role === "user");
      {
        filter.user = user._id;
      }
      const resp = await Blog.deleteOne(filter);
      return {
        statusCode: 200,
        message: "Blog Deleted Successfully",
        success: true,
        data: resp,
      };
    } catch (err) {
      errorObj.message = err.message || "Something Went Wrong";
      errorObj.statusCode = 500;
      return errorObj;
    }
  },
  UpdateBlogById: async (req) => {
    try {
      const {
        user,
        params: { id },
        body,
      } = req;
      const filter = { _id: id };
      if (user?.role === "user");
      {
        filter.user = user._id;
      }
      const resp = await Blog.findOneAndUpdate(filter, body, {
        returnOriginal: false,
      });
      return {
        statusCode: 200,
        message: "Blog Updated Successfully",
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

module.exports = { BlogService };
