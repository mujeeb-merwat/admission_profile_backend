const httpStatus = require('http-status');
const { Document } = require('../models');
const ApiError = require('../utils/ApiError');

const createDocument = async (documentContent) => {
  return Document.create(documentContent);
};

const getAllDocumentsById = async (applicantId) => {
  const documents = await Document.find({ applicantId: applicantId });
  return documents;
};

const getDocumentById = async (id) => {
  return Document.findById(id);
};

const updateDocumentById = async (documentId, updateBody) => {
  const document = await getDocumentById(documentId);
  if (!document) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Document not found');
  }
  Object.assign(document, updateBody);
  await document.save();
  return document;
};

const deleteDocumentById = async (documentId) => {
  const document = await getDocumentById(documentId);
  if (!document) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Document not found');
  }
  await document.remove();
  return document;
};

module.exports = {
  createDocument,
  getDocumentById,
  getAllDocumentsById,
  updateDocumentById,
  deleteDocumentById,
};
