const express = require("express");
const router = express.Router();

// User Model
const User = require("../../models/User");

// @route   GET api/users
// @desc    Get A User
// @access  Public
router.get("/", (req, res) => {
  User.findById(req.body.id)
    .then((user) => res.json(user))
    .catch(() => res.status(404).json({ success: false }));
});

// @route   POST api/users
// @desc    Create A User
// @access  Public
router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save().then((user) => res.json(user));
});

// @route   DELETE api/users
// @desc    Delete A User
// @access  Public
router.delete("/", (req, res) => {
  User.findById(req.body.id)
    .then((user) => user.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
