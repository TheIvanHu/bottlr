const express = require("express");
const router = express.Router();

// TODO: Create ../../models/Bottle.js
// Bottle Model
const Bottle = require("../../models/Bottle");

// @route   GET api/bottles
// @desc    Get A Bottle
// @access  Public
router.get("/", (req, res) => {
  Bottle.findById(req.body.id)
    .then((bottle) => res.json(bottle))
    .catch(() => res.status(404).json({ success: false }));
});

// @route   POST api/bottles
// @desc    Create A Bottle
// @access  Public
router.post("/", (req, res) => {
  const newBottle = new Bottle({
    accountId: req.body.accountId,
    country: req.body.country,
    editDate: req.body.editDate,
    message: req.body.message,
    tags: req.body.tags,
    views: req.body.views,
  });
  newBottle.save().then((bottle) => res.json(bottle));
});

// @route   DELETE api/Bottles
// @desc    Delete A Bottle
// @access  Public
router.delete("/", (req, res) => {
  Bottle.findById(req.body.id)
    .then((bottle) => bottle.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
