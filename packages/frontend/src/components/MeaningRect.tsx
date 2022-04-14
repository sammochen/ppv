import {Card, Grid, Typography} from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import {secondaryTextColor, textColor} from '../theme/colors';
import {WordMeaning} from '../utils/types';

dayjs.extend(relativeTime);

const titleFontSize = '1.5rem';
const titleFontWeight = 550;
const definitionFontSize = '0.9rem';
const metaFontSize = '0.8rem';
const offset = '0.6rem';

type MeaningRectProps = {
  index: number;
  meaning: WordMeaning;
};
export const MeaningRect = ({index, meaning}: MeaningRectProps) => {
  return (
    <Card
      variant="outlined"
      sx={{backgroundColor: 'transparent', width: '100%'}}
    >
      <Grid container sx={{padding: '0.2rem'}}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: definitionFontSize,
              color: textColor.hex(),
            }}
          >
            <span style={{color: secondaryTextColor.hex()}}>
              {(index + 1).toString() + '. '}
            </span>
            <span>{meaning.definition}</span>
            {meaning.example && (
              <span
                style={{
                  fontSize: definitionFontSize,
                  fontStyle: 'italic',
                  color: secondaryTextColor.hex(),
                }}
              >
                {' - ' + meaning.example}
              </span>
            )}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
