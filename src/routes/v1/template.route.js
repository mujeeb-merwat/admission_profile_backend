const express = require('express');
const templateController = require('../../controllers/template.controller');
const router = express.Router();

router.route('/createTemplate').post(templateController.createTemplate);
router.route('/getAllTemplates').get(templateController.getAllTemplates);
router.route('/getTemplateById/:templateId').get(templateController.getTemplateById);
router.route('/updateTemplate/:templateId').put(templateController.updateTemplate);
router.route('/deleteTemplate/:templateId').delete(templateController.deleteTemplate);

module.exports = router;
