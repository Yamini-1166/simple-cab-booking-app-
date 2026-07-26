const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      default: null,
    },

    pickupLocation: {
      type: String,
      required: true,
    },

    dropLocation: {
      type: String,
      required: true,
    },

    vehicleType: {
      type: String,
      enum: ["Mini", "Sedan", "SUV"],
      default: "Mini",
    },

    fare: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Searching", "Accepted", "Ongoing", "Completed", "Cancelled"],
      default: "Searching",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ride", rideSchema);
