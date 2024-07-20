const { stat } = require('fs');
const apiFeatures = require('./../utils/apiFeatures');

const Car = require('./../models/carsModel');
const Account = require('./../models/accountModel');
const Order = require('./../models/ordersModel');

exports.getAllUserCars = async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).json({
      status: 'success',
      results: cars.length,
      data: {
        cars,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllCarTypes = async (req, res) => {
  try {
    const features = new apiFeatures(Car.find(), req.query).limitFields();

    const types = await features.query;

    res.status(200).json({
      status: 'success',
      results: types.length,
      data: {
        carTypes: types,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.addCar = async (req, res) => {
  console.log(req.body);

  try {
    const newCar = await Car.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        car: newCar,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.addCarType = (req, res) => {
  // const lastCar = userCars[userCars.length - 1];
  // const newType = req.body;
  // lastCar.type = newType;
  // fs.writeFile(
  //   `${__dirname}/dev-data/data/cars.json`,
  //   JSON.stringify(userCars),
  //   (err) => {
  //     res.status(201).json({
  //       status: 'success',
  //       data: {
  //         addedType: newType,
  //       },
  //     });
  //   }
  // );
};

exports.deleteCarType = (req, res) => {};

exports.deleteCar = async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
