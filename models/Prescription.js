const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema(
  {
    image: {
      type: Buffer,
      required: true,
    },
    patient: {
      type: String,
      default: "Own",
    },
    userId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prescription", prescriptionSchema);
