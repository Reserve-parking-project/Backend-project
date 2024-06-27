const express = require('express');
const parkingConroller = require('./../controllers/parkingsController');

const router = express.Router();

router.route('/parkings/').get(parkingConroller.getAllParkings);
router
  .route('/parkings/:id')
  .post(parkingConroller.addNewParking)
  .delete(parkingConroller.deleteParking);

router
  .route('/placement/:placementId')
  .post(parkingConroller.addNewPlacement)
  .delete(parkingConroller.deletePlacement);

module.exports = router;
