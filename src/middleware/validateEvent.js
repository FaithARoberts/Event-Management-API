import { param, body, oneOf } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateEventId = [
    param('id')
    .isInt({min:1})
    .withMessage('Event id must be a positive integer'),

    handleValidationErrors,
];

export const validateCreateEvent = [
    body('date')
    .exists({values: 'falsy'})
    .withMessage('date is required')
    .bail()
    .trim()
    .escape()
    .isDate({format: 'MM-DD-YYYY', strictMode: false})
    .withMessage('Date must be in a valid format (MM-DD-YYYY)'),

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

    body('venueId')
    .isInt({min: 1})
    .withMessage('venue id must be a positive integer'),

    body('userId')
    .isInt({min: 1})
    .withMessage('user id must be a positive integer'),

    body('capacity')
    .isInt({min: 10})
    .withMessage('capacity must be at least 10'),

    body('isPublished')
    .optional()
    .isBoolean()
    .withMessage('isPublished must be true or false'),

    handleValidationErrors,
];

export const validateUpdateEvent = [
    oneOf(
        [
          body('date').exists({ values: 'falsy' }),
          body('name').exists({ values: 'falsy' }),
          body('venueId').exists({ values: 'falsy' }),
          body('userId').exists({ values: 'falsy' }),
          body('capacity').exists({ values: 'falsy' }),
          body('isPublished').exists({ values: 'falsy' }),
        ],
        {
          message:
            'At least one field (date,name,venueId,userId,capacity,isPublished) must be provided',
        },
      ),
    
    body('date')
    .optional()
    .exists({values: 'falsy'})
    .withMessage('date is required')
    .bail()
    .trim()
    .escape()
    .isDate({format: 'MM-DD-YYYY', strictMode: false})
    .withMessage('Date must be in a valid format (MM-DD-YYYY)'),

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

    body('venueId')
    .optional()
    .isInt({min: 1})
    .withMessage('venue id must be a positive integer'),

    body('userId')
    .optional()
    .isInt({min: 1})
    .withMessage('user id must be a positive integer'),

    body('capacity')
    .optional()
    .isInt({min: 10})
    .withMessage('capacity must be at least 10'),

    body('isPublished')
    .optional()
    .isBoolean()
    .withMessage('isPublished must be true or false'),

    handleValidationErrors,
];