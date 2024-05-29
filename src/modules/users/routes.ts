import express from 'express';
import {
  creteUsers,
  deleteUsers,
  getUsers,
  searchUsers,
  updateUsers,
} from './controller';
import {
  validateCreateUsersRequest,
  validateDeleteUsersRequest,:i
  validateUpdateUsersRequest,
} from './validators';
dflgksdflkgmsd
//const router = express.Router();

router.get('/users/search', searchUsers);
router.get('/users/:id', getUsers);
router.post(
  '/users/',

  //validateCreateUsersRequest(),
  createUsers,
);
router.put('/users/:id', validateUpdateUsersRequest(), updateUsers);
router.delete('/users/:id', validateDeleteUsersRequest(), deleteUsers);

export default router;
// Jeel1

// Jeel2

// Jeel3

// Jeel4

// Jeel5
// dsfjargkrehggdfkgjegeggntjgnwbnbuih