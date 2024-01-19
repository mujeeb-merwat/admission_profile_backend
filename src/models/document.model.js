const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const documentSchema = mongoose.Schema({
  //   _id: {
  //     type: String,
  //     default: uuidv4,
  //   },
  // Foreign Keys from applicant table
  applicantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Applicants',
  },
  documentName: {
    type: String,
  },
  documentType: {
    type: String,
  },
  score: {
    type: Number,
  },
  file: {
    data: Buffer,
    contentType: String,
  },
  documentContent: {},
  lastReviewed: {
    type: Date,
  },
  lastOpened: {
    type: Date,
  },
});

// add plugin that converts mongoose to json
documentSchema.plugin(toJSON);
documentSchema.plugin(paginate);

const Document = mongoose.model('Documents', documentSchema);

module.exports = Document;
