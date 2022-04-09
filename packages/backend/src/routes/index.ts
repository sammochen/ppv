import express from 'express';

export const api = express();

api.get('/nice', (req, res) => {
  res.send('very nice');
});
