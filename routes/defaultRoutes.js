const express = require('express');
const defaultCtrl = require('../controllers/defaultCtrl');
const router = express.Router();



router.get('/',defaultCtrl.get);
router.get('/health',defaultCtrl.health);
router.get('/trip',defaultCtrl.trip);




module.exports = router;