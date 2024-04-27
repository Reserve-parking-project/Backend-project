const fs = require("fs");
const express = require("express");

const userCars = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/userCars.json`)
);

const getAllParkings = (req, res) => {};

const addNewParking = (req, res) => {};

const addNewPlacement = (req, res) => {};

const deleteParking = (req, res) => {};

const deletePlacement = (req, res) => {};

const router = express.Router();

router.route("/parkings/").get(getAllParkings);
router.route("/parkings/add").post(addNewParking);
router.route("/parkings/:id").delete(deleteParking);

router.route("/placement/add/:placementId").post(addNewPlacement);
router.route("/placement/:id").delete(deletePlacement);

module.exports = router;
