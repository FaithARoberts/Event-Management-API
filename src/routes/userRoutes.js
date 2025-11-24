import express from 'express';
import * as userController from '../controllers/userController.js';
import {} from '../middleware/validateUser.js';

const router = express.Router();

router.get('/', );
router.get('/me', );
router.get('/me/tickets',);
router.get('/me/events',);
router.put('/me',);
router.delete('/me',);

export default router;