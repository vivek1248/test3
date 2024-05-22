import { pbkdf2Sync, randomBytes } from 'crypto';

export function genPassword(password) {
  const salt = randomBytes(32).toString('hex');
  const hash = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return { salt, hash };
}

export function validPassword(password, hash, salt) {
  const hashVerify = pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString(
    'hex',
  );
  return hash === hashVerify;
}
