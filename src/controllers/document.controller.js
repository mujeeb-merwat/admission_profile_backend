const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { documentService } = require('../services');

const createDocument = catchAsync(async (req, res) => {
  const document = await documentService.createDocument(req.body);
  res.status(httpStatus.CREATED).send(document);
});
const getApplicantDocuments = catchAsync(async (req, res) => {
  const documents = await documentService.getApplicantDocuments(req.params.applicantId);
  if (!documents) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Documnet not found');
  }
});
const getDocument = catchAsync(async (req, res) => {
  const document = await documentService.getDocumentById(req.params.documentId);
  if (!document) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Documwnt not found');
  }
  res.send(document);
});

const updateDocument = catchAsync(async (req, res) => {
  const document = await documentService.updateDocumentById(req.params.documentId, req.body);
  res.send(document);
});

const deleteDocument = catchAsync(async (req, res) => {
  await documentService.deleteDocumentById(req.params.documentId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createDocument,
  getApplicantDocuments,
  getDocument,
  updateDocument,
  deleteDocument,
};
