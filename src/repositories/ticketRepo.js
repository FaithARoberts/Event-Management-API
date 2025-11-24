import prisma from '../config/db.js';

//get ticket by venue id 
export async function findTicketsByEventId(eventId) {
    return await prisma.ticket.findMany({
        where: { eventId },
        select: {
            id: true,
            eventId: true,
            userId: true,
            admits: true,
            isUsed: true,
        },
    });
}

//create new ticket
export async function createTicket(data) {  
    return await prisma.ticket.create({
        data,
        select: {
            id: true,
            eventId: true,
            userId: true,
            admits: true,
            isUsed: true,
        },
    });
}

//get ticket by id
export async function findTicketById(id) {
    return await prisma.ticket.findUnique({
        where: { id },
        select: {
            id: true,
            eventId: true,
            userId: true,
            admits: true,
            isUsed: true,
        },
    });
}


//update ticket by ticketId
export async function updateTicket(id, updates) {
    try {
        return await prisma.ticket.update({
            where: { id },
            data: updates,
            select: {
                id: true,
            eventId: true,
            userId: true,
            admits: true,
            isUsed: true,
            },
        });
    } catch (err) {
        if (err.code === 'P2025') return null;
        throw err;
    }
}

//delete ticket by id
export async function deleteTicket(id) {
    try {
        await prisma.ticket.delete({
            where: { id },
        });
        return true;
    } catch (err) {
        if (err.code === 'P2025') return null;
        throw err;
    }
}