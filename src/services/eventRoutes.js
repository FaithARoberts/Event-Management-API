import * as eventRepository from '../repositories/eventRepo.js';

export async function getAllEvents() {
    return await eventRepository.getAll();
}

export async function getEventById(id){
    const event = await eventRepository.findOne(id);
    if(!event){
        const error = new Error(`There is no event with id ${id}`);
        error.status = 404;
        throw error;
    }
    return event;
}

export async function createNewEvent(newEvent){

}

export async function updateExistingEvent(id,eventInfo){

}

export async function deleteEvent(id){
    return await eventRepository.remove(id);
}