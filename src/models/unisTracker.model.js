const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const { toJSON, paginate } = require('./plugins');

const unisTrackerSchema = mongoose.Schema({
  //   _id: {
  //     type: String,
  //     default: uuidv4,
  //   },

  // Foreign Keys from applicant table
  // applicantId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Applicant',
  // },

  applicantId: {
    type: String,
  },

  // Foreign Keys from applicant table
  // sharedWith: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Applicant',
  //   },
  // ],
  sharedWith: [
    {
      type: String,
    },
  ],
  trackData: {
    type: String,
  },
});

// add plugin that converts mongoose to json
unisTrackerSchema.plugin(toJSON);
unisTrackerSchema.plugin(paginate);

const UnisTracker = mongoose.model('UnisTracker', unisTrackerSchema);

module.exports = UnisTracker;
