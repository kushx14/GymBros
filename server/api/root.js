const express = require('express');
const router = express.Router();
const path = require('path');
const {getname, getemail} = require('./get');
const {addUser,checkUser} = require('./addUser');
const {addfitnessdata, getfitnessdata} = require('./fitnessdata');

router.post('/addUser', addUser);
router.post('/addfitnessdata',addfitnessdata);
router.post('/getfitnessdata',getfitnessdata);
router.get('/getname', getname);
router.get('/getemail', getemail);
router.get('/checkUser/:userId', checkUser);



module.exports = router;