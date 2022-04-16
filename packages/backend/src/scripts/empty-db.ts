import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {AuthoredWordEntryModel} from '../db/models';

const initMongoDB = async () => {
  const MONGODB_USERNAME = process.env['MONGODB_USERNAME'];
  const MONGODB_PASSWORD = process.env['MONGODB_PASSWORD'];
  if (!MONGODB_USERNAME || !MONGODB_PASSWORD)
    throw new Error('No MongoDB credentials');

  const url = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@ppv-db.v8jst.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  await mongoose.connect(url);
  console.log('💿 Connected to MongoDB');
};

const main = async () => {
  dotenv.config();
  initMongoDB();

  console.log('Emptying db...');
  await AuthoredWordEntryModel.deleteMany();
  console.log('Emptied.');

  mongoose.disconnect();
};

main();
