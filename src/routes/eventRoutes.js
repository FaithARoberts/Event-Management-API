import express from 'express';
import {getAllEventsHandler, getEventByIdHandler, createNewEventHandler, updateExistingEventHandler, deleteExistingEventHandler} from '../controllers/eventController.js';
import {validateEventId, validateEventQuery, validateCreateEvent, validateUpdateEvent} from '../middleware/validateEvent.js';
import { authorizeRoles } from '../middleware/authorizeRoles.js';
import {authenticate} from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', authenticate, validateEventQuery, getAllEventsHandler );
router.get('/:id', validateEventId, getEventByIdHandler );
router.post('/', authenticate, authorizeRoles('ADMIN'), validateCreateEvent, createNewEventHandler );
router.put('/:id', authenticate, authorizeRoles('ADMIN'), validateUpdateEvent, updateExistingEventHandler);
router.delete('/:id', authenticate, authorizeRoles('ADMIN'), deleteExistingEventHandler);

export default router;