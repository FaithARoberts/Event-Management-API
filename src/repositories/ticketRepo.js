import prisma from '../config/db/js';

export async function findTicketsByEventId(eventId){
    return await prisma.user.findUnique({
        where: {eventId},
        select: {
            id: true,
            userId: true,
            eventId: true,
            admits: true,
            isUsed: true
        }
    })
}

export async function findTicketById(id){
    return await prisma.user.findUnique({
        where: {id},
        select: {
            id: true,
            userId: true,
            eventId: true,
            admits: true,
            isUsed: true
        }
    })
}

export async function createTicket(data){
    return await prisma.ticket.create({data: data});
}

export async function updateTicket(id, data){
    try {
        const updatedTicket = await prisma.ticket.update({
        where: { id },
        data: data,
        select: {
            id: true,
            userId: true,
            eventId: true,
            admits: true,
            isUsed: true
        }
        });
        return updatedTicket;
    } catch (error) {
        if (error.code === 'P2025') return null;
        throw error;
    }
}

export async function deleteTicket(id){
    try {
    const deletedTicket = await prisma.user.delete({
      where: { id },
    });
    return deletedTicket;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}