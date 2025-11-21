import express from 'express';
import {} from '../controllers/userController.js';
import {} from '../middleware/validateUser.js';
import { authorizeRoles } from '../middleware/authorizeRoles.js';
import {authenticate} from '../middleware/authenticate.js';

const router = express.Router();

router.get('/', authenticate, authorizeRoles('ADMIN'), );
router.get('/me', );
router.get('/me/tickets',);
router.get('/me/events',);
router.put('/me',);
router.delete('/me',);

export default router;