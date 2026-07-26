const express = require("express");
const Ride = require("../models/Ride");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/book", protect, async (req, res) => {
  try {
    const { pickupLocation, dropLocation, vehicleType, fare } = req.body;

    const ride = await Ride.create({
      user: req.user.id,
      pickupLocation,
      dropLocation,
      vehicleType,
      fare,
    });

    res.status(201).json({
      message: "Ride booked successfully",
      ride,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/my-rides", protect, async (req, res) => {
  try {
    const rides = await Ride.find({ user: req.user.id })
      .populate("driver")
      .sort({ createdAt: -1 });

    res.json(rides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/:id/status", protect, async (req, res) => {
  try {
    const ride = await Ride.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(ride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
