const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    vehicleNumber: {
      type: String,
      required: true,
    },

    vehicleType: {
      type: String,
      enum: ["Mini", "Sedan", "SUV"],
      default: "Mini",
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    currentLocation: {
      latitude: Number,
      longitude: Number,
    },

    rating: {
      type: Number,
      default: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Driver", driverSchema);
