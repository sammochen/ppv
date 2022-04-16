import axios from 'axios';
import {useEffect, useRef, useState} from 'react';
import {AuthoredWordEntry} from '../utils/types';

export const useWordBank = () => {
  const [wordList, setWordList] = useState<AuthoredWordEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const queryId = useRef(1);

  const refetch = async () => {
    setLoading(true);
    const curQueryId = ++queryId.current;

    const response = await axios.get(`/api/word-bank/`);
    if (curQueryId !== queryId.current) {
      // invalidated
      return;
    }

    const data: AuthoredWordEntry[] = response.data;

    data.sort((a, b) => {
      return b.createTime - a.createTime;
    });

    setLoading(true);
    setWordList(data);
  };

  useEffect(() => {
    // init
    refetch();
  }, []);

  const addAuthoredWordEntry = async (authoredWordEntry: AuthoredWordEntry) => {
    await axios.post(`/api/word-bank/word`, {
      authoredWordEntry: authoredWordEntry,
    });
    await refetch();
  };

  return {wordList, addAuthoredWordEntry, loading};
};
