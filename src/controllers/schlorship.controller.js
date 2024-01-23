const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { scholarshipService } = require('../services');

const createScholarship = catchAsync(async (req, res) => {
  var schlorshipBody = req.body;
  schlorshipBody['deadline'] = new Date(schlorshipBody['deadline']);

  const scholarship = await scholarshipService.createScholarship(schlorshipBody);
  res.status(httpStatus.CREATED).send(scholarship);
});
const getAllScholarships = catchAsync(async (req, res) => {
  const scholarships = await scholarshipService.getAllScholarships();
  if (!scholarships) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Scholarships not found');
  }
  res.send(scholarships);
});

const getScholarshipById = catchAsync(async (req, res) => {
  const scholarship = await scholarshipService.getScholarshipById(req.params.scholarshipId);
  if (!scholarship) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Scholarship not found');
  }
  res.send(scholarship);
});

const updateScholarship = catchAsync(async (req, res) => {
  const scholarship = await scholarshipService.updateScholarship(req.params.scholarshipId, req.body);
  res.send(scholarship);
});

const deleteScholarship = catchAsync(async (req, res) => {
  await scholarshipService.deleteScholarship(req.params.scholarshipId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createScholarship,
  getAllScholarships,
  getScholarshipById,
  updateScholarship,
  deleteScholarship,
};
