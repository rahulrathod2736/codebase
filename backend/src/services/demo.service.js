const DemoService = {
  getTestRoutes: async (req) => {
    return {
      statusCode: 200,
      message: "Response Gets Succesfully",
      status: true,
      data: {
        test: "Hello From Server",
      },
    };
  },
};

module.exports = { DemoService };
