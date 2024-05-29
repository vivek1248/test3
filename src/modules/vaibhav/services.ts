import Vaibhav from './model';
import { Schema } from 'mongoose';
import { ICError } from '../../utils/customErrors/ic_error';

export const create = async () => {};
export const get = async ({id}) => {
const o_id = new Types.ObjectId(id);
const res = await Vaibhav.findOne({ _id: o_id });

if (!res) {
const msg = 'Vaibhav not found in records';
throw new ICError(msg, 404);
}

return res;
};
export const search = async () => {};
export const update = async () => {};
export const remove = async () => {};