const express = require("express");
const Driver = require("../models/Driver");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", protect, async (req, res) => {
  try {
    const { vehicleNumber, vehicleType } = req.body;

    const driver = await Driver.create({
      user: req.user.id,
      vehicleNumber,
      vehicleType,
    });

    res.status(201).json({
      message: "Driver registered successfully",
      driver,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/available", protect, async (req, res) => {
  try {
    const drivers = await Driver.find({ isAvailable: true }).populate(
      "user",
      "name email"
    );

    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
