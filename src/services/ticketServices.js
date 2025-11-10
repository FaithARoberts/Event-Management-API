import * as ticketRepository from '../repositories/ticketRepo.js';

export async function getAllTickets() {
    return await ticketRepository.getAll();
}

export async function getTicketById(id){
    const ticket = ticketRepository.findOne(id);
    if(!ticket){
        const error = new Error(`There is no ticket with id ${id}`);
        error.status = 404;
        throw error;
    }
    return ticket;
}

export async function createNewTicket(newTicket){

}

export async function updateTicketById(id, ticketInfo){
    
}

export async function deleteTicketById(id){
    return await ticketRepository.remove(id);
}