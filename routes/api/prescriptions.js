const express = require("express");
const router = express.Router();

//User Model
const Prescription = require("../../models/Prescription");

// @route   GET api/prescriptions/user/:_id
// @desc    Get user prescriptions by userId
// @access  Private***
router.get("/user/:_id", (req, res) => {
  // console.log(req.params._id);
  Prescription.find({ userId: req.params._id })
    .sort({ createdAt: -1 }) //des order by date
    .then((items) => res.json(items));
  // .then(() => console.log("req.body"));
});

//POST moved to api/upload
// // @route   POST api/prescriptions
// // @desc    Add new prescription
// // @access  Private***
// router.post("/", auth, (req, res) => {
//   const { image, patient, userId } = req.body;
//   const newPrescription = new Prescription({
//     image,
//     patient,
//     userId,
//   });
// });

// @route   DELETE api/prescriptions/:id
// @desc    Delete a prescription
// @access  Private***
router.delete("/:id", (req, res) => {
  // console.log(req.params.id);
  Prescription.findByIdAndDelete(req.params.id)
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
