import express from 'express';
import {getAllUsersHandler, getUserByIdHandler, getUserTicketsHandler, getUserEventsHandler, updateUserbyIdHandler, removeUserByIdHandler, removeCurrentUserHandler} from '../controllers/userController.js';
import { authorizeRoles } from '../middleware/authorizeRoles.js';
import {authenticate} from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', authenticate, authorizeRoles('ADMIN'), getAllUsersHandler );
router.get('/:id', authenticate, getUserByIdHandler);
router.get('/me/tickets', authenticate, getUserTicketsHandler);
router.get('/me/events', authenticate, getUserEventsHandler);
router.put('/me', authenticate, authorizeRoles('ADMIN'), updateUserbyIdHandler);
router.put('/:id', authenticate, updateUserbyIdHandler);
router.delete('/me', authenticate, removeCurrentUserHandler);
router.delete('/:id', authenticate, authorizeRoles('ADMIN'), removeUserByIdHandler);

export default router;