import {WordEntry} from './types';

export abstract class Dictionary {
  abstract getWordEntry(word: string): Promise<WordEntry | null>;
}
