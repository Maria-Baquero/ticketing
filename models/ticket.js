const { Schema, model} = require('mongoose');


const TicketSchema = Schema({

    title: {
        type: String,
        required: [true, 'Title is required']

    },
    description: {
        type: String,
        required: [true, 'Description is required']
        

    },
    id_user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    status: {
        type: String,
        enum: ['OPEN','IN_PROCESS', 'CLOSE'],
        default: 'OPEN',
        required: true
    }
}, {timestamps: true }
);


TicketSchema.methods.toJSON = function() {
    
    const { _id, __v, ...ticket } = this.toObject();
    ticket.uid = _id;  //convertimos _id en uid
    return ticket;
}

module.exports = model('Ticket', TicketSchema);