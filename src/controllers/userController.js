import {getUserByRole, getUserById, getUserTickets, getUserEvents, updateUserById, removeUser} from '../services/userServices.js';

export async function getUserByRoleHandler(req, res, next){
    const role = req.body.role;
    const users = await getUserByRole(role);
    res.status(200).json(users);
}

export async function getUserByIdHandler(req, res, next){
    const id = parseInt(req.params.id);
    const user = await getUserById(id);
    res.status(200).json(user);
}

export async function getUserTicketsHandler(req, res, next){
    const id = parseInt(req.params.id);
    const tickets = await getUserTickets(id);
    res.status(200).json(tickets);
}

export async function getUserEventsHandler(req, res, next){
    const id = rparseInt(req.params.id);
    const events = await getUserEvents(id);
    res.status(200).json(events);
}

export async function updateUserbyIdHandler(req, res, next){
    const id = parseInt(req.params.id);

    const updates = {};
    if (req.body.firstName) updates.firstName = req.body.firstName;
    if (req.body.lastName) updates.lastName = req.body.lastName;
    if (req.body.email) updates.email = req.body.email;
    if (req.body.passwordHash) updates.passwordHash = req.body.passwordHash;

    const updatedEvent = await updateUserById(id, updates);
    res.status(204).json(updatedEvent);
}

export async function removeUserHandler(req, res, next){
    const id = parseInt(req.params.id);
    const events = await removeUser(id);
    res.status(204).json(events);
}
