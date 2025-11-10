import * as venueRepository from '../repositories/venueRepo.js';

export async function getAllVenues() {
    return await venueRepository.getAll();
}

export async function getVenueById(id){
    return await venueRepository.findVenueByAddress(id);
}

export async function createNewVenue(newVenue){

}

export async function updateExistingVenue(id, venueInfo){
    
}

export async function deleteVenueById(id){
    return await venueRepository.deleteVenue(id);
}