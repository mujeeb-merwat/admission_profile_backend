const httpStatus = require('http-status');
const { UnisTracker } = require('../models');
const ApiError = require('../utils/ApiError');

const createUnisTrack = async (uniBody) => {
  return UnisTracker.create(uniBody);
};

const getAllUnistrackers = async (applicantId) => {
  const unisTrackers = await UnisTracker.find({ applicantId: applicantId });
  return unisTrackers;
};

const getUnisTrackerById = async (id) => {
  return UnisTracker.findById(id);
};

const updateUnisTrackerById = async (unisTrackerId, updateBody) => {
  const unisTracker = await getUnisTrackerById(unisTrackerId);
  if (!unisTracker) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Uni tracker not found');
  }
  Object.assign(unisTracker, updateBody);
  await unisTracker.save();
  return unisTracker;
};

const deleteUnisTrackerById = async (unisTrackerId) => {
  const unisTracker = await getUnisTrackerById(unisTrackerId);
  if (!unisTracker) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Applicant not found');
  }
  await unisTracker.remove();
  return unisTracker;
};

module.exports = {
  createUnisTrack,
  getAllUnistrackers,
  getUnisTrackerById,
  updateUnisTrackerById,
  deleteUnisTrackerById,
};
