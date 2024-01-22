const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { staticContentService } = require('../services');

const createStaticContent = catchAsync(async (req, res) => {
  const staticContent = await staticContentService.createStaticContent(req.body);
  res.status(httpStatus.CREATED).send(staticContent);
});
const getAllStaticContent = catchAsync(async (req, res) => {
  const staticContents = await staticContentService.getAllStaticContent();
  if (!staticContents) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StaticContents not found');
  }
  res.send(staticContents);
});

const getStaticContnentById = catchAsync(async (req, res) => {
  const staticContent = await staticContentService.getStaticContentById(req.params.staticContentId);
  if (!staticContent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StaticContent not found');
  }
  res.send(staticContent);
});

const updateStaticContent = catchAsync(async (req, res) => {
  const staticContent = await staticContentService.updateStaticContent(req.params.staticContentId, req.body);
  res.send(staticContent);
});

const deleteStaticContent = catchAsync(async (req, res) => {
  console.log('Hi form deleteStaticContent');
  await staticContentService.deleteStaticContent(req.params.staticContentId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createStaticContent,
  getAllStaticContent,
  getStaticContnentById,
  updateStaticContent,
  deleteStaticContent,
};
