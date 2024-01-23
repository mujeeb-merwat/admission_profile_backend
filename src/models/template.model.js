const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const templateSchema = mongoose.Schema({
  //   _id: {
  //     type: String,
  //     default: uuidv4,
  //   },

  name: {
    type: String,
    required: true,
  },
  extension: {
    type: String,
  },
  fileContent: {
    type: String,
  },
  //   JSON for criteria and details
  usedBy: {
    type: Number,
  },
});

// add plugin that converts mongoose to json
templateSchema.plugin(toJSON);
templateSchema.plugin(paginate);

const Template = mongoose.model('Template', templateSchema);

module.exports = Template;
