const mongoose = require("mongoose");

const prescriptionSchema = mongoose.Schema(
  {
    image: {
      name: {
        type: String,
      },
      data: {
        type: Buffer,
      },
      mimetype: {
        type: String,
      },
      md5: {
        type: String,
      },
    },
    patient: {
      type: String,
      default: "Own",
    },
    userId: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prescription", prescriptionSchema);
