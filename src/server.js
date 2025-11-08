import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import prisma from './config/db.js';
import {findVenueByAddress,createVenue,findVenueById,updateVenue,deleteVenue} from "./repositories/venueRepo.js";

//TESTING FUNCTIONS
async function testVenueRepo() {

  const venue = await createVenue({
    name: "Test location 1",
    address: "1800 place street",
    capacity: 150,
  });
  console.log("Created Venue: ", venue);

  const venueByAddress = await findVenueByAddress("1800 place street");
  console.log("Venue At Address:", venueByAddress);

  const venueById = await findVenueById(venue.id);
  console.log(`Venue With ID ${venue.id}`, venueById);

  const updatedVenue = await updateVenue(venue.id, {capacity:100,});
  console.log(`Updated Venue With ID ${venue.id}`, updatedVenue);

   const deletedVenue = await deleteVenue(venue.id);
  console.log(`Venue With ID ${venue.id}`, deletedVenue);

}






const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(morgan('tiny'));

app.use(express.json());

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  if (!err.status) {
    console.log(err.stack);
    err.status = 500;
    err.message = 'Internal Server Error';
  }
  res.status(err.status).json({ error: err.message });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//run test functions:
console.log("Running Tests...");
testVenueRepo();
