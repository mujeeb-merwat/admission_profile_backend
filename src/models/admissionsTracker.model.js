const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const { toJSON, paginate } = require('./plugins');

const admissionsTrackerSchema = mongoose.Schema({
  //   _id: {
  //     type: String,
  //     default: uuidv4,
  //   },

  // Foreign Keys from applicant table
  applicantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Applicants',
  },
  // Foreign Keys from applicant table
  sharedWith: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Applicants',
    },
  ],
  trackData: {
    type: string,
  },
});

// add plugin that converts mongoose to json
admissionsTrackerSchema.plugin(toJSON);
admissionsTrackerSchema.plugin(paginate);

const AdmissionsTracker = mongoose.model('AdmissionTracker', admissionsTrackerSchema);

module.exports = AdmissionsTracker;
