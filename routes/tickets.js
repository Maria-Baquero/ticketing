const { Router } = require('express');
const {check} = require('express-validator');
const { getTickets } = require('../controllers/tickets');



const router = Router();

//-----------------------------------------------------


router.get('/', getTickets);


//router.post('/',);



//router.put('/',);




//router.delete('/',);
















module.exports = router;