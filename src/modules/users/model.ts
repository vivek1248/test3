//this is smit patel

import mongoose from 'mongoose';

// const { Scema } = mongoose;

const usersSchema = new Schema(
  {},
  {
    timestamps: true,
  },
);
//hello

const Users = mongoose.model('Users', usersSchema);

export default Users
// dv