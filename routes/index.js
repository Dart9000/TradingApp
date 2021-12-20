const express = require("express");
const router = express.Router();

const { isLogedIn } = require('../Midlewares/auth.js');

router.get("/", isLogedIn, (req, res) => {

  res.render("home", {isLogedIn: req.isLogedIn,});
});

module.exports = router
