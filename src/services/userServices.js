import {findUserByRole, findUserById, updateUser, deleteUser, GetUserTicket, findUserEvents} from '../repositories/userRepo.js';
import bcrypt from 'bcrypt';

export async function getUserByRole(role) {
    return await findUserByRole(role);
}

export async function getUserById(id){
    let user = await findUserById(id);
    if(user) return user;
    else{
        const error = new Error(`Cannot find user with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function getUserTickets(id){
    let tickets = await GetUserTicket(id);
    if(tickets) return tickets;
    else{
        const error = new Error(`Cannot find tickets for user with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function getUserEvents(id){
    let events = await findUserEvents(id);
    if(events) return events;
    else{
        const error = new Error(`Cannot find events for user with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function updateUserById(id, data){
    const updates = {...data};

    if(updates.password) {
        const saltRounds = 10;
        updates.password = await bcrypt.hash(updates.password, saltRounds);
    }

    const updatedUser = await updateUser(id, updates);
    if(updatedUser) return updatedUser;
    else{
        const error = new Error(`Cannot find user with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function removeUser(id){
    let result = await deleteUser(id);
    if(result) return;
    else{
        const error = new Error(`Cannot find user with id ${id}`);
        error.status = 404;
        throw error;
    }
}