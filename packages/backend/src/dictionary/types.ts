export interface WordMeaning {
  partOfSpeech: string;
  definition: string;
  example?: string;
}

export interface WordEntry {
  word: string;
  meanings: WordMeaning[];
}

export interface AuthoredWordEntry {
  wordEntry: WordEntry;
  author: string;
  createTime: number; // millis since utc
}
