const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./apis/auth.api");
const blogRoutes = require("./apis/blog.api");
const categoryRoutes = require("./apis/category.api");
const { Config } = require("./config");



const handleServer = (app) => {
  const port = Config.port;
  // Handle Routes
  
  mongoose.connect(Config.mongoUrl, {},(err) => {
    require("./models/user");
    if(err) {
      console.log("Something Went Wrong, Please Restart Server");
    }
    app.use(bodyParser.json());
    app.use("/api/v1", authRoutes);
    app.use("/api/v1", blogRoutes);
    app.use("/api/v1", categoryRoutes);
    app.get("/", () => {
      res.send("Hello from Server");
    });
    console.log("Database Connected Successfully");
    app.listen(port, () => {
      console.log(`Server Started on Port ${port}`);
    });
  });  
};

module.exports = { handleServer };
