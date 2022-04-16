import axios from 'axios';
import express from 'express';
import {MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose';
import {AuthoredWordEntry} from '../../dictionary/types';
import {wordBankRouter} from '../word-bank';

const TEST_PORT = 6000;
const BASE_URL = `http://localhost:${TEST_PORT}`;

describe('wordBankRouter', () => {
  let app: any = null;
  let server: any = null;
  let mongodb: any = null;

  beforeAll(async () => {
    app = express();
    app.use(express.json());
    app.use('/api/word-bank', wordBankRouter);

    mongodb = await MongoMemoryServer.create();
    await mongoose.connect(mongodb.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongodb.stop();
  });

  beforeEach(done => {
    server = app.listen(TEST_PORT, () => {
      done();
    });
  });

  afterEach(done => {
    server.close(() => {
      done();
      server = null;
    });
  });

  it('empty GET', async () => {
    const response = await axios.get(`${BASE_URL}/api/word-bank/`);
    const {data} = response;
    expect(data.length).toBe(0);
  });

  it('POST', async () => {
    const authoredWordEntry: AuthoredWordEntry = {
      author: 'sam',
      createTime: new Date().getTime(),
      wordEntry: {
        word: 'king',
        meanings: [
          {
            partOfSpeech: 'noun',
            definition: 'royal person',
            example: 'he is a king',
          },
          {
            partOfSpeech: 'verb',
            definition: 'to act like a king',
            example: 'are you going to king today',
          },
        ],
      },
    };

    // Add 1 word
    {
      const response = await axios.post(`${BASE_URL}/api/word-bank/word`, {
        authoredWordEntry: authoredWordEntry,
      });
      const code = response.status;
      expect(code).toBe(201);
    }

    // Check the 1 word is inside
    {
      const response = await axios.get(`${BASE_URL}/api/word-bank/`);
      const {data} = response;
      expect(data.length).toBe(1);
      expect(data[0].wordEntry.word).toEqual(authoredWordEntry.wordEntry.word);
    }
  });
});
