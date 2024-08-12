const express = require('express');
const carsController = require('./../controllers/carsController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, carsController.getAllUserCars)
  .post(carsController.addCar);
router
  .route('/types')
  .get(carsController.getAllCarTypes)
  .post(carsController.addCarType);
router.route('/types/:id').delete(carsController.deleteCarType);
router.route('/:id').delete(carsController.deleteCar);

module.exports = router;
