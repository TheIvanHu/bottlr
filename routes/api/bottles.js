const express = require("express");
const router = express.Router();

// Bottle Model
const Bottle = require("../../models/Bottle");

// @route   GET api/bottles
// @desc    Get Bottle(s)
// @access  Public
router.get("/", (req, res) => {
  if (req.query.id)
    Bottle.findById(req.query.id)
      .then((items) => res.json(items))
      .catch(() => res.status(404).json({ success: false }));
  else
    Bottle.find()
      .then((items) => res.json(items))
      .catch(() => res.status(404).json({ success: false }));
});

// @route   POST api/bottles
// @desc    Create A Bottle
// @access  Public
router.post("/", (req, res) => {
  if (!req.body.accountId || !req.body.country) {
    return res.status(400).json({ success: false });
  }
  const newBottle = new Bottle({
    accountId: req.body.accountId,
    country: req.body.country,
    editDate: req.body.editDate,
    message: req.body.message,
    tags: req.body.tags,
    views: req.body.views,
  });
  newBottle
    .save()
    .then((bottle) => res.json(bottle))
    .catch(() => res.status(500).json({ success: false }));
});

// @route   DELETE api/Bottles
// @desc    Delete A Bottle
// @access  Public
router.delete("/", (req, res) => {
  Bottle.findById(req.query.id)
    .then((bottle) => bottle.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
