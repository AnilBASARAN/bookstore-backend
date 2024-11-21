const express = require("express");

const { postAnOrder,getOrderByEmail } = require("./order.controller");
const router = express.Router();

// create order endpoint

router.post("/create-order",postAnOrder)

// get orders by user email

router.get("/:email",getOrderByEmail)



module.exports = router;