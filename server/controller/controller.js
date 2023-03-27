class imageController {
  static home = async (req, res) => {
    try {
      res.render("main");
    } catch (error) {
      console.log(error);
    }
  };

  static upload = async (req, res, next) => {
    try {
      const files = req.files;

      const img = files.map((i, index) => {
        return `http://localhost:5050/${i.filename}`;
      });
      if (!files) {
        const error = new Error("Please choose files");
        error.httpStatusCode = 400;
        return next(error);
      }
      res.json({
        data: img,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = imageController;
