export type WordMeaning = {
  partOfSpeech: string;
  definition: string;
  example?: string;
};

export type WordEntry = {
  word: string;
  meanings: WordMeaning[];
};

export type AuthoredWordEntry = {
  wordEntry: WordEntry;
  author: string;
  date: Date;
};
