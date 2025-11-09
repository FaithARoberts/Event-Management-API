import prisma from '../config/db.js';

//get events by venue id 
export async function findEventsByVenueId(venueId) {
    return await prisma.venue.findMany({
        where: { venueId },
        select: {
            id: true,
            venueId: true ,
            name: true,
            date: true,
            capacity: true,
            isPublished: true,
        },
    });
}


//create new event
export async function createEvent(data) {  
    return await prisma.event.create({
        data,
        select: {
            id: true,
            venueId: true,
            name: true,
            date: true,
            capacity: true,
            isPublished: true,
        },
    });
}

//get events by event id
export async function findEventById(eventId) {
    return await prisma.venue.findUnique({
        where: { eventId },
        select: {
            id: true,
            venueId: true,
            name: true,
            date: true,
            capacity: true,
            isPublished: true,
        },
    });
}

//update event by id
export async function updateEvent(id, updates) {
    try {
        return await prisma.event.update({
            where: { id },
            data: updates,
            select: {
                id: true,
            venueId: true,
            name: true,
            date: true,
            capacity: true,
            isPublished: true,
            },
        });
    } catch (err) {
        if (err.code === 'P2025') return null;
        throw err;
    }
}

//delete event by id
export async function deletEvent (id) {
    try {
        await prisma.event.delete({
            where: { id },
        });
        return true;
    } catch (err) {
        if (err.code === 'P2025') return null;
        throw err;
    }
}