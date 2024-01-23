const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { templateService } = require('../services');

const createTemplate = catchAsync(async (req, res) => {
  const template = await templateService.createTemplate(req.body);
  res.status(httpStatus.CREATED).send(template);
});
const getAllTemplates = catchAsync(async (req, res) => {
  const templates = await templateService.getAllTemplates();
  if (!templates) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Templates not found');
  }
  res.send(templates);
});

const getTemplateById = catchAsync(async (req, res) => {
  const template = await templateService.getTemplateById(req.params.templateId);
  if (!template) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Template not found');
  }
  res.send(template);
});

const updateTemplate = catchAsync(async (req, res) => {
  const template = await templateService.updateTemplate(req.params.templateId, req.body);
  res.send(template);
});

const deleteTemplate = catchAsync(async (req, res) => {
  await templateService.deleteTemplate(req.params.templateId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createTemplate,
  getAllTemplates,
  getTemplateById,
  updateTemplate,
  deleteTemplate,
};
