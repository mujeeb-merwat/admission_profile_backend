const httpStatus = require('http-status');
const { Template } = require('../models');
const ApiError = require('../utils/ApiError');

const createTemplate = async (template) => {
  return Template.create(template);
};

const getAllTemplates = async () => {
  const templates = await Template.find();
  return templates;
};

const getTemplateById = async (id) => {
  return Template.findById(id);
};

const updateTemplate = async (templateId, updateBody) => {
  const template = await getTemplateById(templateId);
  if (!template) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Template not found');
  }
  Object.assign(template, updateBody);
  await template.save();
  return template;
};

const deleteTemplate = async (templateId) => {
  const template = await getTemplateById(templateId);
  if (!template) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Template not found');
  }
  await template.remove();
  return template;
};

module.exports = {
  createTemplate,
  getTemplateById,
  getAllTemplates,
  updateTemplate,
  deleteTemplate,
};
