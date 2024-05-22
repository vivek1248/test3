import mongoose from 'mongoose';
import {
  CLUSTER_URL,
  DB_NAME,
  DB_PASSWORD,
  DB_USERNAME,
  IS_DEVELOPMENT,
  IS_TEST,
} from '../config/env';
/* eslint-disable no-console */
// Replace the uri string with your connection string.
// example : mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority
const URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${CLUSTER_URL}/${DB_NAME}?retryWrites=true&w=majority`;

// const connectionString = IS_DEVELOPMENT
//   ? `mongodb://localhost:27017/${DB_NAME}`
//   : URI;

console.log(
  `⚡️[App running in]: ${IS_DEVELOPMENT ? 'Development' : IS_TEST ? 'TEST' : 'PROD'} mode`,
);

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log('⚡️[DB]: Connected to database!');
  } catch (error) {
    console.error('⚡️[DB]: Could not connect to database!');
    console.error(error);
  }
};

export default connectDB;
/* eslint-enable no-console */
