import {findTicketsByEventId, findTicketById, createTicket, deleteTicket } from '../repositories/ticketRepo.js';

export async function getTicketsByEventId(eventId) {
    const tickets = await findTicketsByEventId(eventId);
    if(tickets) return tickets;
    else{
        const error = new Error(`Cannot find tickets with event id ${eventId}`);
        error.status = 404;
        throw error;
    }
}

export async function getTicketById(id){
    const ticket = await findTicketById(id);
    if(ticket) return ticket;
    else{
        const error = new Error(`Cannot find tickets with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function createNewTicket(newTicket){
    return await createTicket(newTicket);

}

export async function updateTicketById(id, data){
    const updatedTicket = await updateTicketById(id, data);
    if(updatedTicket) return updatedTicket;
    else{
        const error = new Error(`Cannot find ticket with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function deleteTicketById(id){
    const result = await deleteTicket(id);
    if (result) return;
    else {
        const error = new Error(`Cannot find ticket with id ${id}`);
        error.status = 404;
        throw error;
    }
}