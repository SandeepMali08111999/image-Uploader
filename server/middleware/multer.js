const multer = require("multer");
const path = require("path");
//set storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    // var ext=file.originalname.substr(file.originalname.lastIndexOf('.'))
    const ext = path.extname(file.originalname);
   

    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});

const store = multer({ storage: storage });

module.exports = store;
