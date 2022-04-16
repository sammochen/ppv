import {model, Schema} from 'mongoose';
import {AuthoredWordEntry, WordEntry, WordMeaning} from '../dictionary/types';

// WordMeaning
export const wordMeaningSchema = new Schema<WordMeaning>({
  partOfSpeech: {type: String, required: true},
  definition: {type: String, required: true},
  example: String,
});

export const WordMeaningModel = model<WordMeaning>(
  'WordMeaning',
  wordMeaningSchema
);

// WordEntry
export const wordEntrySchema = new Schema<WordEntry>({
  word: {type: String, required: true},
  meanings: {type: [wordMeaningSchema], required: true},
});

export const WordEntryModel = model<WordEntry>('WordEntry', wordEntrySchema);

// AuthoredWordEntry
export const authoredWordEntrySchema = new Schema<AuthoredWordEntry>({
  wordEntry: {type: wordEntrySchema, required: true},
  author: {type: String, required: true},
  createTime: {type: Number, required: true},
});

export const AuthoredWordEntryModel = model<AuthoredWordEntry>(
  'AuthoredWordEntry',
  authoredWordEntrySchema
);
