const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { unisTrackerService } = require('../services');

const createUnisTrack = catchAsync(async (req, res) => {
  const uniTrack = await unisTrackerService.createUnisTrack(req.body);
  res.status(httpStatus.CREATED).send(uniTrack);
});

const getAllUnisTrackers = catchAsync(async (req, res) => {
  console.log('res.params.applicantId : ', req.params.applicantId);
  const result = await unisTrackerService.getAllUnistrackers(req.params.applicantId);
  res.send(result);
});

const getUnisTracker = catchAsync(async (req, res) => {
  const unisTracker = await unisTrackerService.getUnisTrackerById(req.params.unisTrackerId);
  if (!unisTracker) {
    throw new ApiError(httpStatus.NOT_FOUND, 'University Tracker table not found');
  }
  res.send(unisTracker);
});

const updateUnisTracker = catchAsync(async (req, res) => {
  const unisTracker = await unisTrackerService.updateUnisTrackerById(req.params.unisTrackerId, req.body);
  res.send(unisTracker);
});

const deleteUnisTracker = catchAsync(async (req, res) => {
  await unisTrackerService.deleteUnisTrackerById(req.params.unisTrackerId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createUnisTrack,
  getAllUnisTrackers,
  getUnisTracker,
  updateUnisTracker,
  deleteUnisTracker,
};
