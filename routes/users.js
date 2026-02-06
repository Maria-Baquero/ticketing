const { Router } = require('express');
const {check} = require('express-validator');


const { validateEmail,
    validateTelephone,
    validateDni,
    userExistById,
    allowedCollections } = require('../helpers/db-validators');

const { usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
 } = require('../controllers/users');
 
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const { editView, createView } = require('../controllers/views');


const router = Router();

//--------------------------------------

router.get('/', usersGet);

router.get('/edit/:id', editView);

router.get('/create', createView);


router.post('/create', [
    check('name', 'Name is required').not().isEmpty(),

    check('password', 'Password must have 6 letters').isLength({min: 6}),

    check('email', 'The email address is invalid').custom(validateEmail),

    check('telephone', 'Telephone is required').custom(validateTelephone),

    check('dni', 'dnit is required').custom(validateDni),

    validateFields

] ,usersPost);





router.put('/:id', [
    check('id', 'Not a valid ID').isMongoId(),

    check('id').custom( userExistById),

    validateFields
],usersPut);





/*
//Esto de verdad elimina un usuario
router.delete('/:id', [
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(userExistById),
    validateFields
],usersDelete);

*/

//muestra el usuario despues de las validaciones con middlewares
router.delete('/delete/:id', [
    validateJWT,                
      
    check('id', 'invalid ID').isMongoId(),
    
    check('id','user doesnt exist').custom(userExistById),
    
    validateFields

],usersDelete);






router.patch('/:id', usersPatch);



module.exports = router;