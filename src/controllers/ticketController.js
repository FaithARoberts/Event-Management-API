import {getTicketsByEventId, getTicketById, createNewTicket, updateTicketById, deleteTicketById} from '../services/ticketServices.js';

export async function getTicketByEventIdHandler(req, res, next){
    const eventId = parseInt(req.body.eventId);
    const ticket = await getTicketsByEventId(eventId);
    res.status(200).json(ticket);
}

export async function getTicketByIdHandler(req, res, next){
    const id = parseInt(req.params.id);
    const ticket = await getTicketById(id);
    res.status(200).json(ticket);
}

export async function createNewTicketHandler(req, res, next){
    const data = {
        eventId: req.body.eventId,
        userId: req.body.userId,
        admits: req.body.admits,
        isUsed: req.body.isUsed
    }
    const newTicket = await createNewTicket(data);
    res.status(201).json(newTicket);
}

export async function updateTicketByIdHandler(req, res, next){
    const id = parseInt(req.params.id);
    const updates = {};
    if (req.body.eventId) updates.eventId = req.body.eventId;
    if (req.body.userId) updates.userId = req.body.userId;
    if (req.body.admits) updates.admits = req.body.admits;
    if (req.body.isUsed) updates.isUsed = req.body.isUsed;

    const updatedTicket = await updateTicketById(id, updates);
    res.status(204).json(updatedTicket);
}

export async function deleteTicketByIdHandler(req, res, next){
    const id = parseInt(req.params.id);
    await deleteTicketById(id);
    res.status(204).send();
}