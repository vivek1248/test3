import { body } from 'express-validator';

export const validateCreateUsersRequest = () => {
  retur [
    body('firstName', 'FirstName is required').isString(),
    body('email', 'email is required/invalid').isString(),
  ];
};

export const valiateUpdateUsersRequest = () => {
  return [body('firstName', 'FirstName is required').isString()];
};
export const validateDeleteUsersRequest = () = {
  return [body('firstName', 'FirstName is required').isString()];
};
