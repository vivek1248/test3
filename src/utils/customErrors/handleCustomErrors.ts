import { Response } from 'express';
import { responseMessages } from '../../constants/responseMessages';
import { HttpStatusCode } from '../httpStatusCode';
import { sendResponse } from '../sendResponse';
import { ICError } from './ic_error';

/**
 * @function handleCustomError
 *
 * This function is a response sending wrapper for custom error handling
 * Instead of writing extra repetitive lines
 * use this wrapper
 *
 * @param {object} res the response object
 *
 * @returns {object} error the error object
 */
export const handleCustomError = (res: Response, error: unknown) => {
  // console.log(error instanceof ICError);
  // console.log(error);

  if (error instanceof ICError) {
    if (error.code === HttpStatusCode.NotFound) {
      return sendResponse(res, error.code, {}, error.message);
    }
    if (error.code === HttpStatusCode.Unauthorized) {
      return sendResponse(res, error.code, {}, error.message);
    }
    if (error.code === HttpStatusCode.Forbidden) {
      return sendResponse(res, error.code, {}, error.message);
    }
    if (error.code === HttpStatusCode.NotFound) {
      return sendResponse(res, error.code, {}, error.message);
    }
    if (error.code === HttpStatusCode.Conflict) {
      return sendResponse(res, error.code, {}, error.message);
    }
    if (error.code === HttpStatusCode.UnprocessableEntity) {
      return sendResponse(res, error.code, {}, error.message);
    }
  }
  return sendResponse(
    res,
    HttpStatusCode.InternalServerError,
    error,
    responseMessages.genericError,
  );
};

/**
 * @function extractErrors
 *
 * This function is a extract error from errors array
 *
 * @param {Array} errors the errors array of object
 *
 * @returns {Array} errorMessages returns validation error messages
 */
export const extractErrors = (errors) => {
  return errors
    .array({ onlyFirstError: true })
    .map((err) => ({ [err.param]: err.msg }));
};
