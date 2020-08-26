const express = require("express");
const router = express.Router();

//User Model
const Prescription = require("../../models/Prescription");

// @route   GET api/prescriptions
// @desc    Get all prescriptions
// @access  Private***
router.get("/", (req, res) => {
  Prescription.find()
    .sort({ date: -1 }) //des order by date
    .then((items) => res.json(items));
  // .then(() => console.log("req.body"));
});

// @route   POST api/prescriptions
// @desc    Add new prescription
// @access  Private***
router.post("/", (req, res) => {
  const { image, patient, userId } = req.body;
  const newPrescription = new Prescription({
    image,
    patient,
    userId,
  });
});

module.exports = router;
