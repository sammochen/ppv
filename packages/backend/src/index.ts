import dotenv from 'dotenv';
import express from 'express';
import {api} from './routes';

const initExpress = () => {
  const app = express();
  app.use(express.json());

  const PORT = 4000;

  app.use('/api', api);

  app.listen(PORT, () => {
    console.log(`🚀 Backend listening on port ${PORT}!`);
  });
};

const main = () => {
  // envs
  dotenv.config();
  // express
  initExpress();
};

main();
