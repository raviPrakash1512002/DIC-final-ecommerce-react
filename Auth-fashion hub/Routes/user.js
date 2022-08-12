const express =require('express');
const router=express.Router();
const userApi = require('../controllers/user');

router.post('/create-session',userApi.createSession);
router.post('/create',userApi.create);
router.get('/sign-out',userApi.destroySession);

module.exports= router;