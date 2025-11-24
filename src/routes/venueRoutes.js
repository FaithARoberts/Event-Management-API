import express from 'express';
import {getAllVenuesHandler, getVenuesByIdHandler, createNewVenueHandler, updateExistingVenueHandler, deleteVenueByIdHandler} from '../controllers/venueController.js';
import {validateVenueId, validateVenueQuery, validateCreateVenue, validateUpdateVenue} from '../middleware/validateVenue.js';

import { authorizeRoles } from '../middleware/authorizeRoles.js';
import {authenticate} from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', authenticate, validateVenueQuery, getAllVenuesHandler);
router.get('/:id', authenticate, validateVenueId, getVenuesByIdHandler );
router.post('/', authenticate, authorizeRoles('ADMIN'), validateCreateVenue, createNewVenueHandler);
router.put('/:id', authenticate, authorizeRoles('ADMIN'), validateUpdateVenue, updateExistingVenueHandler);
router.delete('/:id', authenticate, authorizeRoles('ADMIN'), deleteVenueByIdHandler);

export default router;