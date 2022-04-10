import dotenv from 'dotenv';
import express from 'express';
import {getWordEntry} from './dictionary';
import {api} from './routes';

const startExpress = () => {
  const app = express();
  app.use(express.json());

  const PORT = 4000;

  app.use('/api', api);

  app.listen(PORT, () => {
    console.log(`🚀 Backend listening on port ${PORT}!`);
  });
};

const main = () => {
  dotenv.config();

  startExpress();

  getWordEntry('banana');
};

main();
