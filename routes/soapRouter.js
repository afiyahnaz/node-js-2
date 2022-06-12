const express = require('express');
const soapCtrl = require('../controllers/soapCtrl');


const router = express.Router();



router.get('/',soapCtrl.get );
router.get('/:id',soapCtrl.getById );
router.post('/',soapCtrl.create);
router.delete('/:id',soapCtrl.delete);





module.exports = router;