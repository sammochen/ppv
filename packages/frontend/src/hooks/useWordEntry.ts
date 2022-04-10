import axios from 'axios';
import {useEffect} from 'react';

type UseWordEntryProps = {
  word: string;
};
export const useWordEntry = ({word}: UseWordEntryProps) => {
  const wordObj = {word: 'hi', definitions: [], author: '', date: Date.now()};
  useEffect(() => {
    // Re-fetch every word.
    // TODO: invalidate old queries
    const fetchWordEntry = async () => {
      const response = await axios.get(`/api/define?word=${word}`);
      console.log(response.data);
    };

    fetchWordEntry();
  }, [word]);

  return {wordObj};
};
