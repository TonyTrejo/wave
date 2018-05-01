const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
// Load User Model
const User = require("../../models/USer");

// GET api/users/test
// test user route
// public
router.get("/test", (req, res) => res.json({ msg: "users works" }));

// POST api/users/register
// register new route
// public
router.post("/register", (req, res) => {
  // find if email exist with mongoose
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email Already Resgistered" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        //avatar
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) return res.json(err);
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// GET api/users/login
// Login user / returning JWT
// public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //find User via email
  User.findOne({ email }).then(user => {
    //Check for user
    if (!user) {
      return res.status(404).json({ email: "Email not Found" });
    }
    // Check Password
    bcrypt.compare(password, user.password).then(matching => {
      if (matching) {
        res.json({ msg: "Success" });
      } else {
        return res.status(400).json({ password: "Incorrect Password" });
      }
    });
  });
});


module.exports = router;
