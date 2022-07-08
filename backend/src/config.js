require("dotenv").config();

const Config = () => {
  const env = process.env;
  return {
    port: env.PORT || 3000,
    mongoUrl: env.URI,
    secretKey: env.SECRET
  };
};

module.exports = { Config: Config() };
