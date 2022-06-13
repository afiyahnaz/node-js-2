const express = require('express');
const soapCtrl = require('../controllers/soapCtrl');


const router = express.Router();



router.get('/',soapCtrl.get );
router.get('/:id',soapCtrl.getById );
router.post('/',soapCtrl.create);
router.delete('/:id',soapCtrl.delete);
router.put('/:id',soapCtrl.update);
router.patch('/:id',soapCtrl.patch);





module.exports = router;