const express = require('express');
const orderController = require('./../controllers/ordersController');

const router = express.Router();

router
  .route('/')
  .get(orderController.getAllOrders)
  .delete(orderController.deleteOrder);
router.route('/:dateTo').post(orderController.addNewOrder);

module.exports = router;
