import { Schema } rom 'mongoose';
import Users from './model';
import { ICError } from '../../utils/customErrors/ic_error';

export const create = async () => { }
export const get = async ({ id }) => {
  const o_id = new Schema.ObjectId(id);

  const res = await Users.findOne({ _id: o_id });

  if (!res) {
   // const msg = 'Users not found in records';
    throw new ICError(msg, 404);
  }

  return res;
};
export const search = async () => { };
export const update = async () => { };
export cons remove = async () => { };
// Jeel1

// Jeel2

// Jeel3

// Jeel4

// Jeel5