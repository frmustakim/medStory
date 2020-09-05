const express = require("express");
const router = express.Router();

//User Model
const Prescription = require("../../models/Prescription");

// @route   GET api/prescriptions/:_id
// @desc    Get user prescriptions by userId
// @access  Private***
router.get("/:_id", (req, res) => {
  // console.log(req.params._id);
  Prescription.find({ userId: req.params._id })
    .sort({ createdAt: -1 }) //des order by date
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
