const httpStatus = require('http-status');
const { StaticContent } = require('../models');
const ApiError = require('../utils/ApiError');

const createStaticContent = async (staticContent) => {
  return StaticContent.create(staticContent);
};

const getAllStaticContent = async () => {
  const staticContents = await StaticContent.find();
  return staticContents;
};

const getStaticContentById = async (id) => {
  return StaticContent.findById(id);
};

const updateStaticContent = async (staticContentId, updateBody) => {
  const staticContent = await getStaticContentById(staticContentId);
  if (!staticContent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StaticContent not found');
  }
  Object.assign(staticContent, updateBody);
  await staticContent.save();
  return staticContent;
};

const deleteStaticContent = async (staticContentId) => {
  const staticContent = await getStaticContentById(staticContentId);
  if (!staticContent) {
    throw new ApiError(httpStatus.NOT_FOUND, 'StaticContent not found');
  }
  await staticContent.remove();
  return staticContent;
};

module.exports = {
  createStaticContent,
  getStaticContentById,
  getAllStaticContent,
  updateStaticContent,
  deleteStaticContent,
};
