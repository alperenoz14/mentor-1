var express = require('express');

var router = express.Router();

var ctrAdmin = require('../controller/adminController');

router.post('/login', ctrAdmin.login);
router.get('/allStudent', ctrAdmin.getAllStudent);
router.get('/allMentor', ctrAdmin.getAllMentor);
router.post('/addBranch', ctrAdmin.addBranch);
module.exports = router;