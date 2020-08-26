const express = require("express");
// const router = express.Router();
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());

//Prescription Model
const Prescription = require("../../models/Prescription");

//Post to /api/upload
app.post("/", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  } else {
    const file = req.files.file;
    const { patient, userId } = req.body;
    const { name, data, mimetype, md5 } = file;
    // console.log("data=>", patient, userId);

    Prescription.findOne({ "image.md5": md5 })
      //.exec() //exec makes it promise as then in findOne not a promise
      .then((prescription) => {
        if (prescription) {
          console.log("Existing Image:", prescription.image.name);
          return res.status(400).json({ msg: "Prescription Exists!" });
        }

        console.log("new prescription", md5, patient);
        const newPrescription = new Prescription({
          image: {
            name,
            data,
            mimetype,
            md5,
          },
          patient,
          userId,
        });

        // try {
        newPrescription.save().then((prescription) => {
          res.status(200).json(prescription);
          console.log("Image uploaded to mongodb atlas");
        });
        // } catch (err) {
        //   if (err) throw err;
        // }
      });
    // .catch((err) => {
    //   throw err;
    // });

    // file.mv(`${__dirname}/../../client/public/uploads/${file.name}`, (err) => {
    //   if (err) {
    //     console.log(err);
    //     return res.status(500).json(err);
    //   } else {
    //     console.log(`${file.name} is uploaded`);
    //     res
    //       .status(200)
    //       .json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    //   }
    // });
  }
});

module.exports = app;
