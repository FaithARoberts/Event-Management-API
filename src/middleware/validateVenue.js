import { param, body, oneOf } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateVenueId = [
    param('id')
    .isInt({min:1})
    .withMessage('Venue id must be a positive integer'),

    handleValidationErrors,
];

export const validateCreateVenue = [
    body('address')
    .exists({ values: 'falsy'})
    .withMessage('address is required')
    .bail()
    .trim()
    .escape()
    .isString()
    .withMessage('address must be a string')
    .bail()
    .isLength({min: 10})
    .withMessage('name must be at least 10 characters'),

    body('name')
    .exists({ values: 'falsy'})
    .withMessage('name is required')
    .bail()
    .trim()
    .escape()
    .isString()
    .withMessage('name must be a string')
    .bail()
    .isLength({min: 3})
    .withMessage('name must be at least 3 characters'),

    body('capacity')
    .isInt({min: 10})
    .withMessage('capacity must be at least 10'),

    body('events')
    .isArray().withMessage('events must be an array'),

    handleValidationErrors,
];

export const validateUpdateVenue = [
    oneOf(
        [
          body('address').exists({ values: 'falsy' }),
          body('name').exists({ values: 'falsy' }),
          body('capacity').exists({ values: 'falsy' }),
          body('events').exists({ values: 'falsy' }),
        ],
        {
          message:
            'At least one field (address,name,capacity,events) must be provided',
        },
      ),
    
   body('address')
    .optional()
    .exists({ values: 'falsy'})
    .withMessage('address is required')
    .bail()
    .trim()
    .escape()
    .isString()
    .withMessage('address must be a string')
    .bail()
    .isLength({min: 10})
    .withMessage('name must be at least 10 characters'),

    body('name')
    .optional()
    .exists({ values: 'falsy'})
    .withMessage('name is required')
    .bail()
    .trim()
    .escape()
    .isString()
    .withMessage('name must be a string')
    .bail()
    .isLength({min: 3})
    .withMessage('name must be at least 3 characters'),

    body('capacity')
    .optional()
    .isInt({min: 10})
    .withMessage('capacity must be at least 10'),

    body('events')
    .optional()
    .isArray().withMessage('events must be an array'),

    handleValidationErrors,
];