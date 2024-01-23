const express = require('express');
const validate = require('../../middlewares/validate');
const unisTrackerController = require('../../controllers/unisTracker.controller');

const router = express.Router();

router.route('/createUnisTracker').post(unisTrackerController.createUnisTrack);
router.route('/getUnisTracker/:unisTrackerId').get(unisTrackerController.getUnisTracker);
router.route('/getAllUnisTrackers/:applicantId').get(unisTrackerController.getAllUnisTrackers);
router.route('/updateUnisTracker/:unisTrackerId').put(unisTrackerController.updateUnisTracker);
router.route('/deleteUnisTracker/:unisTrackerId').delete(unisTrackerController.deleteUnisTracker);

module.exports = router;
