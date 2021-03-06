const express = require('express');
const router = express.Router();
const rentControler = require('../controllers/rentControler');

router.get('/', rentControler.showRentList);
router.get('/add', rentControler.showAddRentForm);
// router.get('/edit/:rentId', rentControler.showEditRentForm);
router.get('/details/:rentId', rentControler.showRentDetails);

// router.post('/add', rentControler.addRent);
// router.post('/edit', rentControler.updateRent);
// router.get('/delete/:rentId', rentControler.deleteRent);

module.exports = router;