const express = require('express');
const validate = require('../../middlewares/validate');
const unisTrackerController = require('../../controllers/unisTracker.controller');

const router = express.Router();

router.route('/createUnisTracker').post(unisTrackerController.createUnisTrack);
router.route('/unisTracker/:unisTrackerId').get(unisTrackerController.getUnisTracker);
router.route('/getAllUnisTrackers').get(unisTrackerController.getAllUnisTrackers);
router.route('/updateUnisTracker/:unisTrackerId').put(unisTrackerController.updateUnisTracker);

// router
//   .route('/')
//   .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
//   .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

// router
//   .route('/:userId')
//   .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

router.route().module.exports = router;
