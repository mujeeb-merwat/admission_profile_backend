const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const { toJSON, paginate } = require('./plugins');

const uniTrackerSchema = mongoose.Schema({
  //   _id: {
  //     type: String,
  //     default: uuidv4,
  //   },

  // Foreign Keys from applicant table
  applicantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Applicant',
  },
  // Foreign Keys from applicant table
  sharedWith: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Applicant',
    },
  ],
  trackData: {
    type: string,
  },
});

// add plugin that converts mongoose to json
uniTrackerSchema.plugin(toJSON);
uniTrackerSchema.plugin(paginate);

const UniTracker = mongoose.model('UniTracker', uniTrackerSchema);

module.exports = UniTracker;
