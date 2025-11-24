import express from 'express';
import {getAllUsersHandler, getUserByIdHandler, getUserTicketsHandler, getUserEventsHandler, updateUserbyIdHandler, removeUserHandler} from '../controllers/userController.js';
import { authorizeRoles } from '../middleware/authorizeRoles.js';
import {authenticate} from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', authenticate, authorizeRoles('ADMIN'), getAllUsersHandler );
router.get('/me', authenticate, getUserByIdHandler);
router.get('/me/tickets', authenticate, getUserTicketsHandler);
router.get('/me/events', authenticate, getUserEventsHandler);
router.put('/me', authenticate, updateUserbyIdHandler);
router.delete('/me', authenticate, removeUserHandler);

export default router;