const express = require("express");
const { postUser } = require("./user.controller");
const router = express.Router();



router.post("/admin",postUser )

module.exports = router;