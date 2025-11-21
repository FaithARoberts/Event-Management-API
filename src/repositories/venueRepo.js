import prisma from '../config/db/js';

export async function findVenueByAddress(address) {
    return await prisma.venue.findUnique({
        where: {address},
        select: {
            id: true,
            name: true,
            address: true,
            capacity: true,
            events: true
        }
    })
}

export async function findVenueById(id){
    return await prisma.venue.findUnique({
        where: {id},
        select: {
            id: true,
            name: true,
            address: true,
            capacity: true,
            events: true
        }
    })
}

export async function createVenue(data){
   return await prisma.venue.create({data: data});
}

export async function updateVenue(id, venueInfo){
    try {
    const updatedVenue = await prisma.venue.update({
      where: { id },
      data: venueInfo,
    });
    return updateVenue;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

export async function deleteVenue(id){
    try {
    const deletedVenue = await prisma.venue.delete({
      where: { id },
    });
    return deleteVenue;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}