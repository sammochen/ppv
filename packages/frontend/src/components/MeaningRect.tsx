import {Card, Grid, Typography} from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {secondaryTextColor, textColor} from '../theme/colors';
import {definitionFontSize} from '../theme/sizes';
import {WordMeaning} from '../utils/types';

dayjs.extend(relativeTime);

const abbreviatePartOfSpeech = (partOfSpeech: string): string => {
  const abbrs = ['n', 'adj', 'v', 'adv', 'pron', 'prep', 'conj', 'interj'];
  const abbr = abbrs.find(s => {
    return partOfSpeech.startsWith(s);
  });
  if (!abbr) {
    console.error(
      'no abbreviation for part of speech found for ' + partOfSpeech
    );
    return partOfSpeech;
  }
  return abbr;
};

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
            {/* number */}
            <span style={{color: secondaryTextColor.hex()}}>
              {(index + 1).toString() + '. '}
            </span>
            {/* part of speech */}
            <span
              style={{color: secondaryTextColor.hex(), fontStyle: 'italic'}}
            >
              {abbreviatePartOfSpeech(meaning.partOfSpeech) + '. '}
            </span>
            {/* definition */}
            <span>{meaning.definition}</span>
            {/* example */}
            {meaning.example && (
              <span
                style={{
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
