const express = require('express');
const staticContentController = require('../../controllers/staticContent.controller');
const router = express.Router();

router.route('/createStaticContent').post(staticContentController.createStaticContent);
router.route('/getAllStaticContent').get(staticContentController.getAllStaticContent);
router.route('/getStaticContnentById/:staticContentId').get(staticContentController.getStaticContnentById);
router.route('/updateStaticContent/:staticContentId').put(staticContentController.updateStaticContent);
router.route('/deleteStaticContent/:staticContentId').delete(staticContentController.deleteStaticContent);

module.exports = router;
