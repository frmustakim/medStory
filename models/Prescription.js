const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema(
  {
    image: {
      type: Buffer,
      required: true
    },
    patient: {
      type: String,
      default: "Own"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prescription", prescriptionSchema);
