const express = require('express');
const router = new express.Router();
const auth = require('../middlewares/authorization');
const LoginController = require('../controllers/LoginController')
const UserController = require('../controllers/UserController')


router.post('/login',LoginController.login);
router.post('/logout',auth,LoginController.logout);

router.get('/user/get',auth,UserController.getUserList);
router.post('/user/getOne',auth,UserController.getUserByEmail);
router.post('/user/save',UserController.saveUser);
router.post('/user/updateRole',auth,UserController.updateRole);

module.exports = router ;