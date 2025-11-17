import prisma from '../config/db.js';

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
            
        },
    });
}

//get user by id
export async function findUserById(id) {
    return await prisma.venue.findUnique({
        where: { id },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
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
            },
        });
    } catch (err) {
        if (err.code === 'P2025') return null;
        throw err;
    }
}

//delete user by id
export async function deleteUser(id) {
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
export async function GetUserTicket(id) {
    return await prisma.ticket.findMany({
        where: {userId:id},
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
    return await prisma.user.findMany({
        where: {userId:id},
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
