import {Grid, Paper, Typography} from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import {secondaryColor, secondaryTextColor, textColor} from '../theme/colors';
import {AuthoredWordEntry} from '../utils/types';

dayjs.extend(relativeTime);

const titleFontSize = '1.5rem';
const titleFontWeight = 550;
const definitionFontSize = '0.9rem';
const metaFontSize = '0.8rem';
const offset = '0.6rem';

export type WordPanelProps = {
  authoredWordEntry: AuthoredWordEntry;
};

export const WordPanel = ({authoredWordEntry}: WordPanelProps) => {
  const {wordEntry} = authoredWordEntry;

  const relativeDateString = dayjs().to(dayjs(authoredWordEntry.date));

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
              fontSize: titleFontSize,
              fontWeight: titleFontWeight,
              color: textColor.hex(),
            }}
          >
            {wordEntry.word}
          </Typography>

          {wordEntry.meanings.map((meaning, index) => {
            return (
              <Typography
                key={index}
                sx={{
                  fontSize: definitionFontSize,
                  color: textColor.hex(),
                }}
              >
                {'- ' + meaning.definition}
              </Typography>
            );
          })}
        </Grid>
      </Grid>

      {/* Metadata - absolute positioned */}
      <Typography
        sx={{
          fontSize: metaFontSize,
          position: 'absolute',
          right: offset,
          top: offset,
          color: secondaryTextColor.hex(),
        }}
      >
        {authoredWordEntry.author + ', ' + relativeDateString}
      </Typography>
    </Paper>
  );
};
