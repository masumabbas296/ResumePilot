const express  = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const upload = require('../middleware/multer.middleware');
const routes  = express.Router();

routes.post('/upload_resume', authMiddleware, upload.single("resume"));

module.exports = routes