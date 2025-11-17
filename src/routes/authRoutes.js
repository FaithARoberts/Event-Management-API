import express from 'express';
import * as authController from '../controllers/authController.js';
import {} from '../middleware/validateAuth.js';

const router = express.Router();

router.post('/signup', authController.signUpHandler);
router.post('/login', authController.logInHandler);

export default router;