import { param, body, oneOf } from 'express-validator';
import { handleValidationErrors } from './handleValidationError.js';

export const validateTicketId = [
    param('id')
    .isInt({min:1})
    .withMessage('Ticket id must be a positive integer'),

    handleValidationErrors,
];

export const validateCreateTicket = [
    body('eventId')
    .isInt({min: 1})
    .withMessage('event id must be a positive integer'),

    body('userId')
    .isInt({min: 1})
    .withMessage('user id must be a positive integer'),

    body('admits')
    .isInt({min: 1})
    .withMessage('admits must be a positive integer'),

    body('isUsed')
    .optional()
    .isBoolean()
    .withMessage('isUsed must be true or false'),

    handleValidationErrors,
];

export const validateUpdateTicket = [
    oneOf(
        [
          body('eventId').exists({ values: 'falsy' }),
          body('userId').exists({ values: 'falsy' }),
          body('admits').exists({ values: 'falsy' }),
          body('isUsed').exists({ values: 'falsy' }),
        ],
        {
          message:
            'At least one field (eventId,userId,admits,isUsed) must be provided',
        },
      ),
    
    body('eventId')
    .optional()
    .isInt({min: 1})
    .withMessage('event id must be a positive integer'),

    body('userId')
    .optional()
    .isInt({min: 1})
    .withMessage('user id must be a positive integer'),

    body('admits')
    .optional()
    .isInt({min: 1})
    .withMessage('admits must be a positive integer'),

    body('isUsed')
    .optional()
    .isBoolean()
    .withMessage('isUsed must be true or false'),

    handleValidationErrors,
];