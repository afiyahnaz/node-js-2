const express = require('express');

const partnerCtrl = require('../controllers/partnerCtrl');



const router = express.Router();



router.get('/', partnerCtrl.get);
router.get('/:id', partnerCtrl.getById);
router.post('/',partnerCtrl.create);
router.delete('/:id',partnerCtrl.delete);




module.exports = router;