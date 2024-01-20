const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { applicantService } = require('../services');

const createApplicant = catchAsync(async (req, res) => {
  console.log('from Applicant');
  console.log('req.body : ', req.body);
  const applicant = await applicantService.createApplicant(req.body);
  console.log('applicant : ', applicant);
  res.status(httpStatus.CREATED).send(applicant);
});

// const getApplicants = catchAsync(async (req, res) => {
//   const filter = pick(req.query, ['name', 'role']);
//   const options = pick(req.query, ['sortBy', 'limit', 'page']);
//   const result = await userService.queryUsers(filter, options);
//   res.send(result);
// });

const getApplicants = catchAsync(async (req, res) => {
  const result = await applicantService.queryApplicants();
  res.send(result);
});

const getApplicant = catchAsync(async (req, res) => {
  const applicant = await applicantService.getApplicantById(req.params.applicantId);
  if (!applicant) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Applicant not found');
  }
  res.send(applicant);
});

const updateApplicant = catchAsync(async (req, res) => {
  const applicant = await applicantService.updateApplicantById(req.params.applicantId, req.body);
  res.send(applicant);
});

const deleteApplicant = catchAsync(async (req, res) => {
  await applicantService.deleteApplicantById(req.params.applicantId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createApplicant,
  getApplicants,
  getApplicant,
  updateApplicant,
  deleteApplicant,
};
