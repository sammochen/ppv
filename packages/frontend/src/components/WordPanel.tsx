import {Grid, Paper, Typography} from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import {secondaryColor, secondaryTextColor, textColor} from '../theme/colors';
import {WordObj} from '../utils/types';
export type WordPanelProps = {
  wordObj: WordObj;
};

dayjs.extend(relativeTime);
export const WordPanel = ({wordObj}: WordPanelProps) => {
  const offset = '0.6rem';
  const relativeDateString = dayjs().to(dayjs(wordObj.date));

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: secondaryColor.hex(),
      }}
      elevation={3}
    >
      {/* Main word  */}
      <Grid container sx={{padding: '1rem'}}>
        <Grid item>
          <Typography
            variant="h6"
            sx={{
              fontSize: '1.5rem',
              fontWeight: 550,
              color: textColor.hex(),
            }}
          >
            {wordObj.word}
          </Typography>

          {wordObj.definitions.map(definition => {
            return (
              <Typography
                sx={{
                  fontSize: '0.9rem',
                  color: textColor.hex(),
                }}
              >
                {'- ' + definition}
              </Typography>
            );
          })}
        </Grid>
      </Grid>

      {/* Author - absolute positioned */}
      <Typography
        sx={{
          fontSize: '0.8rem',
          position: 'absolute',
          right: offset,
          top: offset,
          color: secondaryTextColor.hex(),
        }}
      >
        {wordObj.author + ', ' + relativeDateString}
      </Typography>
    </Paper>
  );
};
