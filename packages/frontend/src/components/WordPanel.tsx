import {Grid, Paper, Typography} from '@mui/material';
import React from 'react';
import {WordItem} from '../utils/types';

export type WordPanelProps = {
  wordItem: WordItem;
};
// Each panel represents each word
export const WordPanel = ({wordItem}: WordPanelProps) => {
  const offset = '0.4rem';

  return (
    <Paper sx={{width: '20rem', position: 'relative'}} elevation={1}>
      {/* Main word typography */}
      <Grid container sx={{padding: '1rem'}}>
        <Grid item>
          <Typography variant="h6">{wordItem.word}</Typography>
        </Grid>
      </Grid>

      {/* Author - absolute positioned */}
      <Typography
        sx={{
          fontSize: '0.7rem',
          position: 'absolute',
          right: offset,
          bottom: offset,
        }}
      >
        {wordItem.author}
      </Typography>

      {/* Date - absolute positioned */}
      <Typography
        sx={{
          fontSize: '0.7rem',
          position: 'absolute',
          right: offset,
          top: offset,
        }}
      >
        {wordItem.date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit',
        })}
      </Typography>
    </Paper>
  );
};
