const express = require('express');
const router = express.Router();
const path = require('path');
const {getname, getemail} = require('./get');
const {addUser} = require('./addUser');
const {addfitnessdata, getfitnessdata} = require('./fitnessdata');

router.post('/addUser', addUser);
router.post('/addfitnessdata',addfitnessdata);
router.post('/getfitnessdata',getfitnessdata);
router.get('/getname', getname);
router.get('/getemail', getemail);



module.exports = router;