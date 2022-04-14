import {AuthoredWordEntry, WordEntry} from './types';

const studiousWordEntry: WordEntry = {
  meanings: [
    {
      definition:
        'Given to thought, or to the examination of subjects by contemplation; contemplative.',
      example: undefined,
      partOfSpeech: 'adjective',
    },
    {
      definition:
        'Dedicated to study; devoted to the acquisition of knowledge from books',
      example: 'a studious scholar',
      partOfSpeech: 'adjective',
    },
    {
      definition:
        '(usually followed by an infinitive or by "of") Earnest in endeavors; attentive; diligent',
      example: 'She is studious to find new friends and allies',
      partOfSpeech: 'adjective',
    },
    {
      definition: 'Planned with study; deliberate; studied.',
      example: undefined,
      partOfSpeech: 'adjective',
    },
    {
      definition: 'Favorable to study; suitable for thought and contemplation',
      example: 'the studious shade',
      partOfSpeech: 'adjective',
    },
  ],
  word: 'studious',
};

export const stubWordList: AuthoredWordEntry[] = [
  {
    author: 'Sam',
    date: new Date('2/1/22'),
    wordEntry: studiousWordEntry,
  },
];
