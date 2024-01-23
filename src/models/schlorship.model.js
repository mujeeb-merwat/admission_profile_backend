const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const scholarshipSchema = mongoose.Schema({
  //   _id: {
  //     type: String,
  //     default: uuidv4,
  //   },

  name: {
    type: String,
  },
  deadline: {
    type: Date,
  },
  country: {
    type: String,
  },
  //   JSON for criteria and details
  details: {
    type: String,
  },
});

// add plugin that converts mongoose to json
scholarshipSchema.plugin(toJSON);
scholarshipSchema.plugin(paginate);
const Scholarship = mongoose.model('Scholarship', scholarshipSchema);

module.exports = Scholarship;
