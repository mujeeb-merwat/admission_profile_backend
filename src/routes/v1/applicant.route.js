const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');
const applicantController = require('../../controllers/applicant.controller');

const router = express.Router();

router.route('/createApplicant').post(applicantController.createApplicant);
router.route('/getApplicant/:applicantId').get(applicantController.getApplicant);
router.route('/getApplicants').get(applicantController.getApplicants);
router.route('/updateApplicant/:applicantId').put(applicantController.updateApplicant);
router.route('/deleteApplicant/:applicantId').delete(applicantController.deleteApplicant);

// router
//   .route('/')
//   .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
//   .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

// router
//   .route('/:userId')
//   .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
