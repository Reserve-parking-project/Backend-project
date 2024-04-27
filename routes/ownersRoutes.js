const fs = require("fs");
const express = require("express");

const userCars = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/userCars.json`)
);

const getAllOwners = (req, res) => {};

const addNewOwner = (req, res) => {};

const deleteOwner = (req, res) => {};

const router = express.Router();

router.route("/").get(getAllOwners);
router.route("/add").post(addNewOwner);
router.route("/:id").delete(deleteOwner);

module.exports = router;
