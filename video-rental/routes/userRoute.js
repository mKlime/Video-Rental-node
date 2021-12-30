const express = require('express');
const router = express.Router();
const userControler = require('../controllers/userControler');

router.get('/', userControler.showUserList);
router.get('/add', userControler.showAddUserForm);
// router.get('/edit/:userId', userControler.showEditUserForm);
router.get('/details/:userId', userControler.showUserDetails);

// router.post('/add', userControler.addUser);
// router.post('/edit', userControler.updateUser);
// router.get('/delete/:userId', userControler.deleteUser);

module.exports = router;

