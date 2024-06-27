const express = require('express');
const ownerController = require('./../controllers/ownersController');

const router = express.Router();

router
  .route('/')
  .get(ownerController.getAllOwners)
  .post(ownerController.addNewOwner);
router.route('/:id').delete(ownerController.deleteOwner);

module.exports = router;
