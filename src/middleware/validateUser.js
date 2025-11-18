import { body } from 'express-validator';
//import { handleValidationErrors } from './handleValidationErrors.js';

export const validateUser = [
    
    body('firstName')
    .exists()
    .withMessage('First name is required')
    .bail()
    .trim()
    .isLength({min: 1})
    .withMessage("Fist name must be at least 1 character"),

    body('lastName')
    .exists()
    .withMessage('Last name is required')
    .bail()
    .trim()
    .isLength({min: 1})
    .withMessage("Last name must be at least 1 character"),

    body('role')
    .exists()
    .withMessage('Role is required')
    .toUpperCase()
    .isIn(["USER", "ADMIN"])
    .withMessage('Role invalid')
    .trim(),


    
    body('email')
    .exists({ values: 'false'})
    .withMessage('email is required')
    .bail()
    .isEmail()
    .withMessage('email is not valid')
    .normalizeEmail(),

    body('password')
    .exists({ values: 'false'})
    .withMessage('password is required')
    .bail()
    .isLength({min: 8, max: 64})
    .withMessage('password must contain at least 8 charcters and at most 64 characters',),


];

export const validateLogIn = [
    
    body('email')
    .exists({ values: 'false'})
    .withMessage('email is required')
    .bail()
    .isEmail()
    .withMessage('email is not valid')
    .normalizeEmail(),

    body('password')
    .exists({ values: 'false'})
    .withMessage('password is required')
    .bail()
    .isLength({min: 8, max: 64})
    .withMessage('password must contain at least 8 charcters and at most 64 characters',),


];
