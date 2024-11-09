const express = require('express');
const router = express.Router();
const path = require('path');
const {getname, getemail} = require('./get');
const {addUser,checkUser} = require('./addUser');
const {addfitnessdata, getfitnessdata} = require('./fitnessdata');
const  scrapeGymStats = require('./scraping')

router.post('/addUser', addUser);
router.post('/addfitnessdata',addfitnessdata);
router.post('/getfitnessdata',getfitnessdata);
router.get('/getname', getname);
router.get('/getemail', getemail);
router.get('/checkUser/:userId', checkUser);
router.get('/scrape-gym-stats', async (req, res) => {
    const data = await scrapeGymStats();
    if (data) {
      res.json(data);
    } else {
      res.status(500).json({ error: 'Failed to scrape data' });
    }
  });



module.exports = router;