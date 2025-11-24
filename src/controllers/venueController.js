import {getAllVenues, getVenueByAddress, getVenueById, createNewVenue, updateExistingVenue, deleteVenueById} from '../services/venueServices.js';

export async function getAllVenuesHandler(req, res) {
  const {
    search,
    sortBy = 'id',
    sortOrder = 'asc',
    limit = 100,
    offset = 0,
  } = req.query;

  const filter = {};
  if (search) filter.search = search;
  filter.sortBy = sortBy;
  filter.sortOrder = sortOrder;
  filter.limit = parseInt(limit);
  filter.offset = parseInt(offset);

  let result = await getAllVenues(filter);
  res.status(200).json(result);
}

export async function getVenuesByAddressHandler(req, res, next){
    const address = req.body.address;
    const venue = await getVenueByAddress(address);
    res.status(200).json(venue);
}

export async function getVenuesByIdHandler(req, res, next){
    const id = parseInt(req.param.id);
    const venue = await getVenueById(id);
    res.status(200).json(venue);
}

export async function createNewVenueHandler(req, res, next){
    const data = {
        address: req.body.address,
        name: req.body.name,
        capacity: req.body.capacity,
        events: req.body.events
    }
    const newVenue = await createNewVenue(data);
    res.status(201).json(newVenue);
}

export async function updateExistingVenueHandler(req, res, next){
    const id = parseInt(req.params.id);
    const updates = {};
    if (req.body.address) updates.address = req.body.address;
    if (req.body.name) updates.name = req.body.name;
    if (req.body.capacity) updates.capacity = req.body.capacity;
    if (req.body.events) updates.events = req.body.events;

    const updatedVenue = await updateExistingVenue(id, updates);
    res.status(204).json(updatedVenue);
}

export async function deleteVenueByIdHandler(req, res, next){
    const id = parseInt(req.params.id);
    await deleteVenueById(id);
    res.status(204).send();
}