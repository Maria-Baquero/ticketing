const { Router } = require('express');
const {check} = require('express-validator');
const { loginView,
    registerView,
    dashboardView } = require('../controllers/views');

const { login, googleSignIn } = require('../controllers/auth');

const {validateFields} = require('../middlewares/validate-fields');


const router = Router();


router.get('/login', loginView);
router.get('/dashboard', dashboardView);




router.post('/login', [
    check('email', 'Emails is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields
],login );



router.post('/google', [
    check('id_token', 'id_token is required').not().isEmpty(),
    validateFields
], googleSignIn);

module.exports = router;