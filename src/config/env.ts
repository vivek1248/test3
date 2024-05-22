import * as dotenv from 'dotenv';
import { Algorithm } from 'jsonwebtoken';

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production.local' });
} else if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test.local' });
} else {
  dotenv.config({ path: '.env.development.local' });
}

export const PORT = process.env.PORT || '8080';
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const IS_TEST = process.env.NODE_ENV === 'test';

export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const CLUSTER_URL = process.env.CLUSTER_URL;
export const EMAIL_HOST = process.env.EMAIL_HOST;
export const EMAIL_PORT = process.env.EMAIL_PORT;
export const EMAIL_USERNAME = process.env.EMAIL_USERNAME;
export const EMAIL_API_KEY = process.env.EMAIL_API_KEY;

export const TOKEN_SECRET_PRIVATE = process.env.TOKEN_SECRET_PRIVATE as string;
export const TOKEN_SECRET_PUBLIC = process.env.TOKEN_SECRET_PUBLIC as string;

export const REFRESH_TOKEN_SECRET_PRIVATE = process.env
  .REFRESH_TOKEN_SECRET_PRIVATE as string;
export const REFRESH_TOKEN_SECRET_PUBLIC = process.env
  .REFRESH_TOKEN_SECRET_PUBLIC as string;

export const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY as string;
export const ACCESS_TOKEN_ALGO = process.env.ACCESS_TOKEN_ALGO as Algorithm;
export const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY as string;
export const REFRESH_TOKEN_ALGO = process.env.REFRESH_TOKEN_ALGO as Algorithm;

export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';
