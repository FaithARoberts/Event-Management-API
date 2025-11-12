import * as venueRepository from '../repositories/venueRepo.js';

export async function getVenuesByAddress(address) {
    return await venueRepository.findVenueByAddress(address);
}

export async function getVenueById(id){
    return await venueRepository.findVenueByAddress(id);
}

export async function createNewVenue(newVenue){
    return await venueRepository.createVenue(newVenue);
}

export async function updateExistingVenue(id, venueInfo){
    return await venueRepository.updateVenue(id, venueInfo);
}

export async function deleteVenueById(id){
    return await venueRepository.deleteVenue(id);
}