const { request, response } = require('express');

const Ticket = require('../models/ticket');


//mostrar tickets
const getTickets = async (req, res = response) => {

    try {
        
        const tickets = await Ticket.find({})

        res.render('tickets/index', { tickets });


    } catch (error) {
        res.status(500).send('Server error');
    }
}



//crear tickets
const postTickets = async (req, res = response) => {




}





//actualizar tickets
const putTickets = async (req, res = response) => {




}






//eliminar tickets
const deleteTickets = async (req, res = response) => {




}


module.exports = {
    getTickets

}