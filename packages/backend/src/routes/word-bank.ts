import express from 'express';
import {AuthoredWordEntryModel} from '../db/models';

export const wordBankRouter = express();

// GET: All words
wordBankRouter.get('/', async (req, res) => {
  console.log(`🏦 GET /`);
  const entries = await AuthoredWordEntryModel.find();
  res.send(entries);
});

// POST: Add 1 word
wordBankRouter.post('/word', async (req, res) => {
  console.log(`🏦 POST /word`);

  const data: any = req.body;
  const {authoredWordEntry} = data;

  if (!authoredWordEntry) {
    console.error(`:( need AuthoredWordEntry`);
    res.sendStatus(400);
    return;
  }

  const newDocument = new AuthoredWordEntryModel(authoredWordEntry);
  await newDocument.save();
  res.sendStatus(201);
});
