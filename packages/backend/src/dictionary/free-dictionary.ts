import axios from 'axios';
import {Dictionary} from './dictionary';
import {WordEntry, WordMeaning} from './types';

export class FreeDictionary extends Dictionary {
  private getQueryURL(word: string): string {
    return `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  }

  async getWordEntry(word: string): Promise<WordEntry | null> {
    try {
      const {data} = await axios.get(this.getQueryURL(word));

      // Returned data is a list
      const meanings: WordMeaning[] = [];
      for (const obj of data) {
        // Word has to be an exact match
        if (obj.word !== word) continue;

        for (const meaning of obj.meanings) {
          for (const definition of meaning.definitions) {
            // Need part of speech and definition

            if (!meaning.partOfSpeech || !definition.definition) continue;
            meanings.push({
              partOfSpeech: meaning.partOfSpeech,
              definition: definition.definition,
              example: definition.example,
            });
          }
        }
      }

      if (meanings.length === 0) return null;
      return {
        word,
        meanings,
      };
    } catch (e) {
      return null;
    }
  }
}
