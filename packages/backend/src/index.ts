import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import {dictionaryRouter} from './routes/dictionary';
import {wordBankRouter} from './routes/word-bank';

const PORT = process.env.PORT || 4000;

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

  // routes
  app.use('/api/dictionary', dictionaryRouter);
  app.use('/api/word-bank', wordBankRouter);

  // frontend
  console.log('🔗 Linking to frontend...');
  const buildPath = path.join(__dirname, '/../../../frontend/build');
  const indexPath = path.join(buildPath, 'index.html');
  app.use(express.static(buildPath));
  app.get('*', (req, res) => res.sendFile(indexPath));

  app.listen(PORT, () => {
    console.log(`🚀 Backend listening on port ${PORT}!`);
  });
};

const main = () => {
  console.log('🔧 Building backend...');
  console.log('🗂 dirname: ', __dirname);

  // envs
  dotenv.config();
  // express
  initExpress();
  // mongodb
  initMongoDB();
};

main();
