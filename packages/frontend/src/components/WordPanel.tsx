import {Grid, Paper, Typography} from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import {secondaryColor, secondaryTextColor, textColor} from '../theme/colors';
import {AuthoredWordEntry} from '../utils/types';
import {MeaningRect} from './MeaningRect';

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
        padding: '1rem',
      }}
      elevation={3}
    >
      <Grid container spacing={1}>
        {/* Main word  */}
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
        </Grid>
        {/* Meanings */}
        {wordEntry.meanings.map((meaning, index) => {
          return (
            <Grid key={index} item xs={12}>
              <MeaningRect meaning={meaning} index={index} />
            </Grid>
          );
        })}
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
