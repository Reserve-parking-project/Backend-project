const fs = require("fs");
const express = require("express");

const userCars = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/userCars.json`)
);

const getAllOrders = (req, res) => {};

const addNewOrder = (req, res) => {};

const deleteOrder = (req, res) => {};

const router = express.Router();

router.route("/").get(getAllOrders);
router.route("/add/:dateTo").post(addNewOrder);
router.route("/delete").delete(deleteOrder);

module.exports = router;
