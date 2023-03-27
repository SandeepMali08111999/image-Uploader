const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5050;
var hbs = require("express-handlebars");
app.use(express.json());

//serving ststic file
app.use(express.static(path.join(__dirname, "uploads")));

//setup view engine
app.set("view engine", "hbs");
//app.set("views", path.join(__dirname, "views/partials"));
//app.set("views", path.join(__dirname, "views"));
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
    defaultView: "default",
    layoutsDir: path.join(__dirname, "views"),
    partialsDir: [
      //  path to your partials
      path.join(__dirname, "views/partials"),
    ],
  })
);
//calling routes
app.use("/", require("./server/router/router.js"));

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
