import axios from 'axios';
import {useEffect, useRef, useState} from 'react';
import {WordEntry} from '../utils/types';

type UseWordEntryProps = {
  word: string;
};
export const useWordEntry = ({word}: UseWordEntryProps) => {
  const [wordEntry, setWordEntry] = useState<WordEntry | null>(null);
  const [loading, setLoading] = useState(false);

  const latestWord = useRef<string>();

  useEffect(() => {
    if (word.length === 0) {
      latestWord.current = word;
      setLoading(false);
      setWordEntry(null);
      return;
    }

    latestWord.current = word;
    setLoading(true);

    const fetchWordEntry = async () => {
      try {
        const response = await axios.get(`/api/define?word=${word}`);

        if (word === latestWord.current) {
          setWordEntry(response.data);
          setLoading(false);
        }
      } catch (e) {
        if (word === latestWord.current) {
          setWordEntry(null);
          setLoading(false);
        }
      }
    };

    fetchWordEntry();
  }, [word]);

  return {loading, wordEntry};
};
