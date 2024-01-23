const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const applicantSchema = mongoose.Schema(
  {
    // _id: {
    //   type: String,
    //   default: uuidv4,
    // },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    phoneNumber: {
      type: String,
      // unique: true,
      // validate(value){
      //     if(!validator.isPhoneNumber(value)){
      //         throw new Error('Invalid phone number')
      //     }
      // }
    },
    subjectLine: {
      type: String,
    },
    description: {
      type: String,
    },
    previousEducation: {
      type: String,
    },
    discipline: {
      type: String,
    },
    university: {
      type: String,
    },
    connectionList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Applicant',
      },
    ],
    favouriteSchlorships: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Scholarship',
      },
    ],
    favouriteCountries: [
      {
        type: String,
      },
    ],
    // favouriteAdvisors: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Advisors',
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
applicantSchema.plugin(toJSON);
applicantSchema.plugin(paginate);

/**
 * @typedef User
 */
const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;
