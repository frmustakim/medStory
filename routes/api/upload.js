const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");

router.post("/", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

module.exports = router;
