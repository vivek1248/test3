//this is smit patel

import mongoose from 'mongoose';

// const { Schema } = mongoose;

const usersSchema = new Schema(
  {},
  {
    timestamps: true,
  },
);
//hello

const Users = mongoose.model('Users', usersSchema);
console.log("hello");
export default Users;
// dv
// Jeel1

// Jeel2

// Jeel3