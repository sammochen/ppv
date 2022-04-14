import axios from 'axios';
import {useEffect, useState} from 'react';
import {WordEntry} from '../utils/types';

type UseWordEntryProps = {
  word: string;
};
export const useWordEntry = ({word}: UseWordEntryProps) => {
  const [wordEntry, setWordEntry] = useState<WordEntry | null>(null);

  useEffect(() => {
    // Re-fetch every word.
    // TODO: invalidate old queries
    const fetchWordEntry = async () => {
      const response = await axios.get(`/api/define?word=${word}`);

      setWordEntry(response.data);
    };

    fetchWordEntry();
  }, [word]);

  return {wordEntry};
};
