const { Router } = require('express');
const {check} = require('express-validator');
const { loginView,
    registerView,
    dashboardView } = require('../controllers/views');

const { login, googleSignIn } = require('../controllers/auth');

const { validateFields } = require('../middlewares/validate-fields');
const { validateEmail, validateTelephone, validateDni } = require('../helpers/db-validators');
const { usersPost } = require('../controllers/users');


const router = Router();

//-------------------------------------------------------------------------------

router.get('/login', loginView);
router.get('/dashboard', dashboardView);
router.get('/register', registerView);



router.post('/login', [
    check('email', 'Emails is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    validateFields
],login );



router.post('/google', [
    check('id_token', 'id_token is required').not().isEmpty(),
    validateFields
], googleSignIn);



router.post('/register', [
    check('name', 'Name is required').not().isEmpty(),

    check('password', 'Password must have 6 letters').isLength({min: 6}),

    check('email', 'The email address is invalid').custom(validateEmail),

    check('telephone', 'Telephone is required').custom(validateTelephone),

    check('dni', 'dnit is required').custom(validateDni),

    validateFields

] ,usersPost);










module.exports = router;