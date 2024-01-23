const httpStatus = require('http-status');
const { Applicant } = require('../models');
const ApiError = require('../utils/ApiError');
const ObjectId = require('mongodb').ObjectId;

/**
 * Create a applicant
 * @param {Object} applicantBody
 * @returns {Promise<Applicant>}
 */

// const createApplicant = async (applicantBody) => {
//   if (await Applicant.isEmailTaken(applicantBody.email)) {
//     throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
//   }
//   return Applicant.create(applicantBody);
// };

const createApplicant = async (applicantBody) => {
  console.log('Applicant Service');
  console.log('applicantBody : ', applicantBody);
  return Applicant.create(applicantBody);
};

/**
 * Query for applicantss
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

// const queryApplicants = async (filter, options) => {
//   const applicants = await Applicant.paginate(filter, options);
//   return applicants;
// };

const queryApplicants = async () => {
  const applicants = await Applicant.find();
  return applicants;
};

/**
 * Get applicant by id
 * @param {ObjectId} id
 * @returns {Promise<Applicant>}
 */
const getApplicantById = async (id) => {
  return Applicant.findById(id);
};

/**
 * Get applicant by email
 * @param {string} email
 * @returns {Promise<Applicant>}
 */
const getApplicantByEmail = async (email) => {
  return Applicant.findOne({ email });
};

/**
 * Update applicant by id
 * @param {ObjectId} applicantId
 * @param {Object} updateBody
 * @returns {Promise<Applicant>}
 */
const updateApplicantById = async (applicantId, updateBody) => {
  console.log('applicantId : ', applicantId);
  const applicant = await getApplicantById(applicantId);
  if (!applicant) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Applicant not found');
  }

  var newConnection = ObjectId(updateBody['connectionList']);

  console.log('updateBody : ', updateBody);
  console.log('applicant?.connectionList : ', applicant?.connectionList);
  updateBody['connectionList'] = [...applicant?.connectionList, newConnection];
  console.log("updateBody['connectionList'] : ", updateBody['connectionList']);
  Object.assign(applicant, updateBody);
  await applicant.save();
  return applicant;
};

/**
 * Delete applicant by id
 * @param {ObjectId} applicantId
 * @returns {Promise<Applicant>}
 */
const deleteApplicantById = async (applicantId) => {
  const applicant = await getApplicantById(applicantId);
  if (!applicant) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Applicant not found');
  }
  await applicant.remove();
  return applicant;
};

module.exports = {
  createApplicant,
  queryApplicants,
  getApplicantById,
  getApplicantByEmail,
  updateApplicantById,
  deleteApplicantById,
};
