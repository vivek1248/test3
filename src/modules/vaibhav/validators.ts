import { body } from 'express-validator';

export const validateCreateVaibhavRequest = () => {
return [
body('firstName', 'FirstName is required').isString(),
body('email', 'email is required/invalid').isString(),
];
};

export const validateUpdateVaibhavRequest = () => {
return [
body('firstName', 'FirstName is required').isString(),
];
};
export const validateDeleteVaibhavRequest = () => {
return [
body('firstName', 'FirstName is required').isString(),
];
};