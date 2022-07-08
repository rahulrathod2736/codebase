const express = require("express");
const { handleServer } = require("./server");
const app = express();



handleServer(app);
