import { body } from 'express-validator';

export const validateCreateUsersRequest = () => {
  return [
    body('firstName', 'FirstName is required').isString(),
    body('email', 'email is required/invalid').isString(),
  ];
};

export const validateUpdateUsersRequest = () => {
  return [body('firstName', 'FirstName is required').isString()];
};
export const validateDeleteUsersRequest = () => {
  return [body('firstName', 'FirstName is required').isString()];
};
