import mongoose from 'mongoose';

const { Schema } = mongoose;

const usersSchema = new Schema(
  {},
  {
    timestamps: true,
  },
);
//hello

const Users = mongoose.model('Users', usersSchema);

export default Users;
