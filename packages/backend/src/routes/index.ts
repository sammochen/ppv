import express from 'express';
import {FreeDictionary} from '../dictionary/free-dictionary';

export const dictionaryRouter = express();

dictionaryRouter.get('/define', async (req, res) => {
  const {query} = req;
  const {word} = query;
  console.log(`📖 Defining: ${word}`);

  if (typeof word == 'string') {
    const dictionary = new FreeDictionary();
    const wordEntry = await dictionary.getWordEntry(word);
    if (wordEntry === null) {
      res.sendStatus(404);
    } else {
      res.send(wordEntry);
    }
  } else {
    res.sendStatus(404);
  }
});
