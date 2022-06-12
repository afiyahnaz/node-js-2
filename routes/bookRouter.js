const express = require('express');
const bookCtrl = require('../controllers/bookCtrl');

const router = express.Router();



router.get('/',bookCtrl.get);
router.get('/:id',bookCtrl.getById);
router.post('/',bookCtrl.create);
// router.delete('/:id',bookCtrl.delete);
// router.put('/:id',bookCtrl.update);
// router.patch('/:id',bookCtrl.patch);




module.exports = router;