import {getEventByVenueId, getEventById, createNewEvent, updateExistingEvent, deleteExistingEvent} from '../services/eventServices.js';

export async function getEventByVenueIdHandler(req,res,next){
    const venueId = parseInt(req.body.venueId);
    const venue = await getEventByVenueId(venueId);
    res.status(200).json(venue);
}

export async function getEventByIdHandler(req,res,next){
    const id = parseInt(req.params.id);
    const venue = await getEventById(id);
    res.status(200).json(venue);
}

export async function createNewEventHandler(req,res,next){
    const data = {
        date: req.body.date, 
        name: req.body.name,
        venueId: req.body.venueId,
        userId: req.body.userId,
        capacity: req.body.userId,
        isPublished: req.body.isPublished,
    }
    const newEvent = await createNewEvent(data);
    res.status(201).json(newEvent);
}

export async function updateExistingEventHandler(req,res,next){
    const id = parseInt(req.params.id);
    const updates = {}
    if (req.body.date) updates.date = req.body.date;
    if (req.body.name) updates.name = req.body.name;
    if (req.body.venueId) updates.venueId = req.body.venueId;
    if (req.body.userId) updates.userId = req.body.userId;
    if (req.body.capacity) updates.capacity = req.body.capacity;
    if (req.body.isPublished) updates.isPublished = req.body.isPublished;

    const updatedEvent = await updateExistingEvent(id, updates);
    res.status(204).json(updatedEvent);
}

export async function deleteExistingEventHandler(req,res,next){
    const id = parseInt(req.params.id);
    await deleteExistingEvent(id);
    res.status(204).send();
}