import express from 'express';
import {getWordEntry} from '../dictionary';

export const api = express();

api.get('/define', async (req, res) => {
  const {query} = req;

  const {word} = query;
  if (typeof word == 'string') {
    res.send(await getWordEntry(word));
  } else {
    res.sendStatus(400);
  }
});
