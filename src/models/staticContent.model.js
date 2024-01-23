const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const staticContentSchema = mongoose.Schema({
  pageName: {
    type: String,
    required: true,
  },
  pageContent: {
    type: String,
  },
});

// add plugin that converts mongoose to json
staticContentSchema.plugin(toJSON);
staticContentSchema.plugin(paginate);

const StaticContent = mongoose.model('StaticContent', staticContentSchema);

module.exports = StaticContent;
