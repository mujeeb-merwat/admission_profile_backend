const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const applicantRoute = require('./applicant.route');
const documentRoute = require('./document.route');
const unisTrackerRoute = require('./unisTracker.route');
const scholarshipRoute = require('./scholarship.route');
const templateRoute = require('./template.route');
const staticContentRoute = require('./staticContent.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/applicants',
    route: applicantRoute,
  },
  {
    path: '/documents',
    route: documentRoute,
  },
  {
    path: '/unisTracker',
    route: unisTrackerRoute,
  },
  {
    path: '/scholarship',
    route: scholarshipRoute,
  },
  {
    path: '/template',
    route: templateRoute,
  },
  {
    path: '/staticContent',
    route: staticContentRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
