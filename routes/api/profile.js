const express = require("express");
const router = express.Router();

// GET api/profile/test
// test profile route
// public
router.get('/test', (req, res) => res.json({ msg: "profile works" }));

module.exports = router;
