const express = require('express');
const router = express.Router();
const path = require('path');
const {getname, getemail} = require('./get');
const {addUser} = require('./addUser');

router.post('/addUser', addUser);

router.get('/getname', getname);
router.get('/getemail', getemail);



module.exports = router;