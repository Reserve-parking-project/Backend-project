const { stat } = require('fs');

const apiFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');

const Car = require('./../models/carsModel');
const Account = require('./../models/accountModel');
const Order = require('./../models/ordersModel');

const AppError = require('./../utils/appError');

exports.getAllUserCars = catchAsync(async (req, res) => {
  const cars = await Car.find();

  res.status(200).json({
    status: 'success',
    results: cars.length,
    data: {
      cars,
    },
  });
});

exports.getAllCarTypes = catchAsync(async (req, res) => {
  const features = new apiFeatures(Car.find(), req.query).limitFields();

  const types = await features.query;

  res.status(200).json({
    status: 'success',
    results: types.length,
    data: {
      carTypes: types,
    },
  });
});

exports.addCar = catchAsync(async (req, res) => {
  console.log(req.body);

  const newCar = await Car.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      car: newCar,
    },
  });
});

exports.addCarType = catchAsync(async (req, res) => {
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
});

exports.deleteCarType = catchAsync(async (req, res) => {});

exports.deleteCar = catchAsync(async (req, res) => {
  const car = await Car.findByIdAndDelete(req.params.id);

  if (!car) {
    return next(new AppError('No car found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
