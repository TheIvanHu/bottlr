const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")
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
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "please enter all fields"});
  }
  User.findOne({email})
    .then(user =>{
      if(user) return res.status(400).json({ msg : "Email is already taken"});
      const newUser = new User({
        name, email, password
      });
      //create salt and hash
      bcrypt.genSalt(5, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user =>{
              res.json({
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            });
          })
        })
    })
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
