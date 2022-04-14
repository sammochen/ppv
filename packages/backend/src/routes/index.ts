import express from 'express';
import {FreeDictionary} from '../dictionary/free-dictionary';

export const api = express();

api.get('/define', async (req, res) => {
  const {query} = req;
  const {word} = query;
  console.log(`📖 Defining: ${word}`);

  if (typeof word == 'string') {
    const dictionary = new FreeDictionary();
    res.send(await dictionary.getWordEntry(word));
  } else {
    res.sendStatus(404);
  }
});
