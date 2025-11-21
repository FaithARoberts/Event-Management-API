import { findVenueByAddress, findVenueById, createVenue, updateVenue, deleteVenue } from '../repositories/venueRepo.js';

export async function getVenueByAddress(address) {
    const venue = await findVenueByAddress(address);
    if(venue) return venue;
    else{
        const error = new Error(`Cannot find venue with address ${address}`);
        error.status = 404;
        throw error;
    }
}

export async function getVenueById(id){
    const venue = await findVenueById(id);
    if(venue) return venue;
    else{
        const error = new Error(`Cannot find venue with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function createNewVenue(newVenue){
    return await createVenue(newVenue);
}

export async function updateExistingVenue(id, venueInfo){
    const updatedVenue = await updateVenue(id, venueInfo);
    if(updatedVenue) return updatedVenue;
    else{
        const error = new Error(`Cannot find venue with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function deleteVenueById(id){
    const result = await deleteVenue(id);
    if (result) return;
    else {
        const error = new Error(`Cannot find venue with id ${id}`);
        error.status = 404;
        throw error;
    }
}