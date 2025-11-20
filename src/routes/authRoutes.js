import express from 'express';
import * as authController from '../controllers/authController.js';
import {validateLogIn, validateUser} from '../middleware/validateUser.js';
import {handleValidationErrors} from '../middleware/handleValidationError.js';
import logInLimiter from '../middleware/logInLimiter.js';

const router = express.Router();

router.post('/signup', validateUser, handleValidationErrors, authController.signUpHandler);
router.post('/login', logInLimiter, validateLogIn, handleValidationErrors, authController.logInHandler);

export default router;