import prisma from '../config/db.js';

export async function findAllUsers(){
    return await prisma.user.findMany();
}

//get users by role
export async function findUserByRole(role) {
    return await prisma.user.findMany({
        where: { role },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
            tickets: true,
            events: true,
            
        },
    });
}

//get user by id
export async function findUserById(id) {
    return await prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
            tickets: true,
            events: true,
        }
    });
}

//update user by id
export async function updateUser(id, updates) {
    try {
        return await prisma.user.update({
            where: { id },
            data: updates,
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                role: true,
                tickets: true,
                events: true,
            },
        });
    } catch (err) {
        if (err.code === 'P2025') return null;
        throw err;
    }
}

//delete user by id
export async function deleteUserById(id) {
    try {
        await prisma.user.delete({
            where: { id },
        });
        return true;
    } catch (err) {
        if (err.code === 'P2025') return null;
        throw err;
    }
}

//Get User ticket
export async function findUserTickets(id) {
    return await prisma.ticket.findMany({
        where: {id},
        select: {
            id: true,
            eventId: true,
            userId: true,
            admits: true,
            isUsed: true,
        },
    });
}
//find events for user with role planner only
export async function findUserEvents(id) {
    return await prisma.event.findMany({
        where: {id},
        select: {
            id: true,
            date: true,
            venueId: true,
            userId: true,
            capacity: true,
            isPublished: true,
        },
    });
}