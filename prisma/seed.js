import bcrypt from 'bcrypt';
import prisma from '../src/config/db.js';

try {
  await prisma.user.deleteMany();
  await prisma.event.deleteMany();
  await prisma.ticket.deleteMany();
  await prisma.venue.deleteMany();

  const usersData = 
[{"id":1,"firstName":"Sileas","lastName":"Iorillo","email":"siorillo0@diigo.com","passwordHash":await bcrypt.hash('12345678', 10),"role":"USER"},
{"id":2,"firstName":"Penni","lastName":"Hawkin","email":"phawkin1@businesswire.com","passwordHash":await bcrypt.hash('87654321', 10),"role":"USER"},
{"id":3,"firstName":"Wandis","lastName":"Scoggin","email":"wscoggin2@photobucket.com","passwordHash":await bcrypt.hash('goodpassword', 10),"role":"ADMIN"},]

 const users = await Promise.all(
    usersData.map((user) => prisma.user.create({ data: user })),
  );


const venueData = 
[{"id":1,"name":"Mohr LLC","address":"83684 Armistice Pass","capacity":668},
{"id":2,"name":"Kilback Group","address":"86 Katie Way","capacity":953},
{"id":3,"name":"Beahan-Reinger","address":"70666 Mandrake Street","capacity":785},
{"id":4,"name":"Lebsack and Sons","address":"60 Esker Parkway","capacity":83},];

 const venue = await Promise.all(
    venueData.map((venue) => prisma.venue.create({ data: venue })),
  );

//generate events
const eventData = 
[{"id":1,"date":"2025-10-27T03:36:39Z","name":"Dawtre","venueId":4,"userId":3,"capacity":236,"isPublished":false},
{"id":2,"date":"2025-12-11T16:43:08Z","name":"Brignell","venueId":2,"userId":3,"capacity":219,"isPublished":true},
{"id":3,"date":"2026-03-19T17:42:11Z","name":"Roll","venueId":1,"userId":3,"capacity":405,"isPublished":false},
{"id":4,"date":"2025-09-29T23:28:51Z","name":"Gosby","venueId":4,"userId":3,"capacity":686,"isPublished":true}];

 const events = await Promise.all(
    eventData.map((event) => prisma.event.create({ data: event })),
  );

//generate tickets
const ticketData = 

[{"id":1,"eventId":1,"userId":3,"admits":1,"isUsed":false},
{"id":2,"eventId":3,"userId":2,"admits":1,"isUsed":true},
{"id":3,"eventId":2,"userId":1,"admits":1,"isUsed":false},
{"id":4,"eventId":1,"userId":3,"admits":1,"isUsed":true},
{"id":5,"eventId":1,"userId":2,"admits":1,"isUsed":true},
{"id":6,"eventId":4,"userId":1,"admits":1,"isUsed":false},
{"id":7,"eventId":1,"userId":1,"admits":1,"isUsed":false},
{"id":8,"eventId":2,"userId":1,"admits":1,"isUsed":true},
{"id":9,"eventId":3,"userId":3,"admits":1,"isUsed":true},
{"id":10,"eventId":4,"userId":2,"admits":1,"isUsed":true}]

 const ticket = await Promise.all(
    ticketData.map((ticket) => prisma.ticket.create({ data: ticket})),
  );

  
console.log('Seed completed successfully!');
} catch (error) {
  console.error('Seed failed:', error);
} finally {
  await prisma.$disconnect();
}
