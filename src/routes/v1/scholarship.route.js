const express = require('express');
const schlorshipController = require('../../controllers/schlorship.controller');
const router = express.Router();

router.route('/createSchlorship').post(schlorshipController.createScholarship);
router.route('/getAllScholarships').get(schlorshipController.getAllScholarships);
router.route('/getScholarshipById/:scholarshipId').get(schlorshipController.getScholarshipById);
router.route('/updateScholarship/:scholarshipId').put(schlorshipController.updateScholarship);
router.route('/deleteScholarship/:scholarshipId').delete(schlorshipController.deleteScholarship);

module.exports = router;
