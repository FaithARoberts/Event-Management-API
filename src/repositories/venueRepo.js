import prisma from '../config/db.js';

export async function findAllVenues(filter){
  const conditions = {};

    if (filter.search) {
      conditions.OR = [
        { name: { contains: filter.search, mode: 'insensitive' } },
        { events: { contains: filter.search, mode: 'insensitive' } },
      ];
    }

    const venues = await prisma.event.findMany({
      where: conditions,
      select: {
          id: true,
          name: true,
          address: true,
          capacity: true,
          events: true
      },
      orderBy: { [filter.sortBy]: filter.sortOrder },
      take: filter.limit,
      skip: filter.offset,
    });

    return venues;
}

export async function findAllVenues(filter){
  const conditions = {};
  
    if (filter.search) {
      conditions.OR = [
        { name: { contains: filter.search, mode: 'insensitive' } },
        { events: { contains: filter.search, mode: 'insensitive' } },
      ];
    }
  
    const venues = await prisma.event.findMany({
      where: conditions,
      select: {
          id: true,
          name: true,
          address: true,
          capacity: true,
          events: true
      },
      orderBy: { [filter.sortBy]: filter.sortOrder },
      take: filter.limit,
      skip: filter.offset,
    });
  
    return venues;
}

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