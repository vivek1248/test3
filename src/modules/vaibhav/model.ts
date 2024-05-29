import mongoose from 'mongoose';

const { Schema } = mongoose;

const vaibhavSchema = new Schema(
{},
{
timestamps: true,
}
);

const Vaibhav = mongoose.model('Vaibhav', vaibhavSchema);

export default Vaibhav;