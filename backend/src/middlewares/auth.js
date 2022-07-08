const jwt = require("jsonwebtoken");
const { Config } = require("../config");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const resp = await jwt.verify(token, Config.secretKey);
    req.user = resp;
    next();
  } catch (err) {
    res.status(401).json({ success: false, message: "Invalid Token" });
  }
};

const authorise = (roles) => (req, res, next) =>  {
  const { user } = req;
  if (!roles.includes(user.role)) {
    return res.status(403).json({
      success: false,
      message: "Not Authorised",
    });
  }
  next();
};

module.exports = { verifyToken, authorise };
