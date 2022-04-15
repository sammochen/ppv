import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import {dictionaryRouter} from './routes';

const PORT = 4000;

const initMongoDB = async () => {
  const MONGODB_USERNAME = process.env['MONGODB_USERNAME'];
  const MONGODB_PASSWORD = process.env['MONGODB_PASSWORD'];
  if (!MONGODB_USERNAME || !MONGODB_PASSWORD)
    throw new Error('No MongoDB credentials');

  const url = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@ppv-db.v8jst.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  await mongoose.connect(url);
  console.log('💿 Connected to MongoDB');
};

const initExpress = () => {
  const app = express();
  app.use(express.json());

  app.use('/api/dictionary', dictionaryRouter);

  app.listen(PORT, () => {
    console.log(`🚀 Backend listening on port ${PORT}!`);
  });
};

const main = () => {
  // envs
  dotenv.config();
  // express
  initExpress();
  // mongodb
  initMongoDB();
};

main();
