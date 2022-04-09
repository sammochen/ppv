import axios from 'axios';

// Same typing as https://dictionaryapi.dev/
type Definition = {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
};

type Entry = {
  word: string;
  phonetic: string;
  origin: string;
  meanings: Meaning[];
};

export const getWordEntry = async (queryWord: string) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${queryWord}`;
  const response = await axios.get(url);

  // The API returns a list of entries that match. Will look for exact match
  const wordEntry = response.data.find((entry: Entry) => {
    return entry.word === queryWord;
  });
  if (wordEntry === undefined)
    throw new Error(`No entry exists with word=${queryWord}`);

  console.log(wordEntry);
  return wordEntry;
};
