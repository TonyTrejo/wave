const express = require('express');
const router = express.Router();

// GET api/users/test
// test user route
// public
router.get('/test', ( req, res) => res.json({msg: "users works"}));

module.exports = router;