const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const schlorshipSchema = mongoose.Schema({
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
schlorshipSchema.plugin(toJSON);
schlorshipSchema.plugin(paginate);

const Schlorship = mongoose.model('Schlorship', schlorshipSchema);

module.exports = Schlorship;
