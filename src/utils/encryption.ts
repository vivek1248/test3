import { sign, verify } from 'jsonwebtoken';
import {
  ACCESS_TOKEN_ALGO,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_ALGO,
  REFRESH_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET_PRIVATE,
  REFRESH_TOKEN_SECRET_PUBLIC,
  TOKEN_SECRET_PRIVATE,
  TOKEN_SECRET_PUBLIC,
} from '../config/env';

if (
  !TOKEN_SECRET_PRIVATE ||
  !TOKEN_SECRET_PUBLIC ||
  !ACCESS_TOKEN_EXPIRY ||
  !ACCESS_TOKEN_ALGO ||
  !REFRESH_TOKEN_EXPIRY ||
  !REFRESH_TOKEN_ALGO
) {
  /* eslint-disable no-console */
  console.log('Please set JWT ENV variables');
  /* eslint-enable no-console */
  process.exit(-1);
}

export const createAccessToken = (data) =>
  sign(data, TOKEN_SECRET_PRIVATE, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
    algorithm: ACCESS_TOKEN_ALGO,
  });

export const decryptAccessToken = (token) =>
  verify(token, TOKEN_SECRET_PUBLIC, {
    algorithms: [ACCESS_TOKEN_ALGO],
  });

export const createRefreshToken = (data) =>
  sign(data, REFRESH_TOKEN_SECRET_PRIVATE, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
    algorithm: REFRESH_TOKEN_ALGO,
  });

export const decryptRefreshToken = (token) =>
  verify(token, REFRESH_TOKEN_SECRET_PUBLIC, {
    algorithms: [REFRESH_TOKEN_ALGO],
  });
