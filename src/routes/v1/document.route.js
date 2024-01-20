const express = require('express');
const documentController = require('../../controllers/document.controller');
const router = express.Router();

router.route('/createDocument').post(documentController.createDocument);
router.route('/getApplicantDocuments').get(documentController.getApplicantDocuments);
router.route('/getDocument/:documentId').get(documentController.getDocument);
router.route('/updateDocument/:documentId').put(documentController.updateDocument);
router.route('/deleteDocument/:documentId').delete(documentController.deleteDocument);

module.exports = router;
