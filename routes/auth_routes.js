const express = require('express');
const { request } = require('express');
const router = express.Router() //  importing router function

const google_ctrl1 = require('../google-oauth/get-url');
const get_token = require('../google-oauth/get-token');``
const ctrl_1 = require('../controllers/auth');
const google_signin = require('../google-oauth/google_signin')


router.use('/google-auth',google_ctrl1);
router.use('/get-token',get_token,google_signin);
//router.use('/google-signin',google_signin);
router.post('/signup',ctrl_1.signup);
router.post('/login',ctrl_1.login);

module.exports = router;