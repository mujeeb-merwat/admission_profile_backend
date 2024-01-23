const httpStatus = require('http-status');
const { Scholarship } = require('../models');
const ApiError = require('../utils/ApiError');

const createScholarship = async (scholarship) => {
  return Scholarship.create(scholarship);
};

const getAllScholarships = async () => {
  const scholarships = await Scholarship.find();
  return scholarships;
};

const getScholarshipById = async (id) => {
  return Scholarship.findById(id);
};

const updateScholarship = async (scholarshipId, updateBody) => {
  const scholarship = await getScholarshipById(scholarshipId);
  if (!scholarship) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Scholarship not found');
  }
  Object.assign(scholarship, updateBody);
  await scholarship.save();
  return scholarship;
};

const deleteScholarship = async (scholarshipId) => {
  const scholarship = await getScholarshipById(scholarshipId);
  if (!scholarship) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Scholarship not found');
  }
  await scholarship.remove();
  return scholarship;
};

module.exports = {
  createScholarship,
  getScholarshipById,
  getAllScholarships,
  updateScholarship,
  deleteScholarship,
};
