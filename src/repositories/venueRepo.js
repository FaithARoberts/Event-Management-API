import prisma from '../config/db.js';

//get venue by address
export async function findVenueByAddress(address) {
    return await prisma.venue.findMany({
        where: { address },
        select: {
            id: true,
            name: true,
            address: true,
            capacity: true,
        },
    });
}

//create new venue
export async function createVenue(data) {  
    return await prisma.venue.create({
        data,
        select: {
            id: true,
            name: true,
            address: true,
            capacity: true,
        },
    });
}

//get venue by id
export async function findVenueById(id) {
    return await prisma.venue.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            address: true,
            capacity: true,
        },
    });
}

//update venue by id
export async function updateVenue(id, updates) {
    try {
        return await prisma.venue.update({
            where: { id },
            data: updates,
            select: {
                id: true,
                name: true,
                address: true,
                capacity: true,
            },
        });
    } catch (err) {
        if (err.code === 'P2025') return null;
        throw err;
    }
}

//delete venue by id
export async function deleteVenue(id) {
    try {
        await prisma.venue.delete({
            where: { id },
        });
        return true;
    } catch (err) {
        if (err.code === 'P2025') return null;
        throw err;
    }
}