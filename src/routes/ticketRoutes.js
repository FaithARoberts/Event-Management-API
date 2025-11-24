import express from 'express';
import {getAllTicketsHandler, getTicketByEventIdHandler, createNewTicketHandler, updateTicketByIdHandler, deleteTicketByIdHandler} from '../controllers/ticketController.js';
import {validateTicketId, validateCreateTicket, validateUpdateTicket} from '../middleware/validateTicket.js';
import { authorizeRoles } from '../middleware/authorizeRoles.js';
import { authorizeOwnership } from '../middleware/authorizeOwnership.js';
import {authenticate} from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', authenticate, authorizeRoles('ADMIN'), getAllTicketsHandler);
router.get('/:id', authenticate, authorizeOwnership, validateTicketId, getTicketByEventIdHandler);
router.post('/', authenticate, authorizeRoles('ADMIN'), validateCreateTicket, createNewTicketHandler);
router.put('/:id', authenticate, authorizeRoles('ADMIN'), validateUpdateTicket, updateTicketByIdHandler);
router.delete('/:id', authenticate, authorizeRoles('ADMIN'), deleteTicketByIdHandler);

export default router;