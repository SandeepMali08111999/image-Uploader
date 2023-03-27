const route = require("express").Router();
const controller = require("../controller/controller.js");
const store = require("../middleware/multer.js");
var fs = require("fs");
var path = require("path");

//routes

route.get("/", controller.home);

route.post("/uploadmultiple", store.array("images", 12), controller.upload);

module.exports = route;
