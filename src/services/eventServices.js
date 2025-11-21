import { findEventsByVenueId, createEvent, findEventById, updateEvent, deleteEvent } from '../repositories/eventRepo.js';

export async function getEventByVenueId(venueId) {
    const event = await findEventsByVenueId(venueId);
    if(event) return event;
    else{
        const error = new Error(`Cannot find events with venue id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function getEventById(id){
    const event = await findEventById(id);
    if(event) return event;
    else{
        const error = new Error(`Cannot find event with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function createNewEvent(data){
    return await createEvent(data);
}

export async function updateExistingEvent(id, data){
    const updatedEvent = await updateEvent(id, data);
    if(updatedEvent) return updatedEvent;
    else{
        const error = new Error(`Cannot find event with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function deleteExistingEvent(id){
    const result = await deleteEvent(id);
    if(result) return result;
    else{
        const error = new Error(`Cannot find event with id ${id}`);
        error.status = 404;
        throw error;
    }
}