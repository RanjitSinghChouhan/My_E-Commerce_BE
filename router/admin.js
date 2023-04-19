const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
const jwtBearerAuth = require('../middleware/jwtBearerAuth');

router.post('/register', adminController.register)
router.post('/login', adminController.login)
router.get('/userDetails', jwtBearerAuth, adminController.userDetails)

module.exports = router