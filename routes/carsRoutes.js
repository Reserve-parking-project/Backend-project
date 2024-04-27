const fs = require("fs");
const express = require("express");

const userCars = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/userCars.json`)
);

const getAllUserCars = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: userCars.length,
    data: {
      userCars,
    },
  });
};

const getAllCarTypes = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1;
  const carType = userCars.find((el) => el.id === id);

  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: userCars.length,
    data: {
      carId: id,
      carTypes: carType,
    },
  });
};

const addCar = (req, res) => {
  const newId = userCars[userCars.length - 1].id + 1;
  const newCar = Object.assign({ id: newId }, req.body);

  userCars.push(newCar);

  fs.writeFile(
    `${__dirname}/dev-data/data/cars.json`,
    JSON.stringify(userCars),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          addedCar: newCar,
        },
      });
    }
  );
};

const addCarType = (req, res) => {
  const lastCar = userCars[userCars.length - 1];
  const newType = req.body;

  lastCar.type = newType;

  fs.writeFile(
    `${__dirname}/dev-data/data/cars.json`,
    JSON.stringify(userCars),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          addedType: newType,
        },
      });
    }
  );
};

const deleteCarType = (req, res) => {};

const deleteCar = (req, res) => {};

const router = express.Router();

router.route("/").get(getAllUserCars).post(addCarType);
router.route("/types").get(getAllCarTypes).post(addCarType);
router.route("/types/:id").delete(deleteCarType);
router.route("/:id").delete(deleteCar);

module.exports = router;
