const express = require("express");
const router = express.Router();

//User Model
const User = require("../../models/User");

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  const newUser = new User({
    name,
    email,
    password,
  });

  // newUser.save().then((user) => res.json(user));
});

module.exports = router;
