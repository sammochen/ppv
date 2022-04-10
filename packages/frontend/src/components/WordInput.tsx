import {Grid, Paper, TextField, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import React from 'react';
import {
  popColor as secondaryColor,
  secondaryColor as popColor,
  textColor,
} from '../theme/colors';

export type WordInputProps = {
  onSubmitWord: (word: string) => void;
};
export const WordInput = ({onSubmitWord}: WordInputProps) => {
  const titleFontSize = '1.5rem';
  const titleFontWeight = 550;
  const definitionFontSize = '0.9rem';
  const metaFontSize = '0.8rem';
  const offset = '0.6rem';

  const wordObj = {word: 'hi', definitions: [], author: '', date: Date.now()};

  const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& input': {
        color: textColor.hex(),
        fontSize: titleFontSize,
        fontWeight: titleFontWeight,
      },

      '& fieldset': {
        border: `1.5px solid ${secondaryColor.hex()}`,
      },

      '&:hover fieldset': {
        border: `1.5px solid ${secondaryColor.hex()}`,
      },

      '&.Mui-focused fieldset': {
        border: `2px solid ${secondaryColor.hex()}`,
      },
    },
    '& .MuiInputLabel-root': {
      color: secondaryColor.hex(),

      '&.Mui-focused': {
        color: secondaryColor.hex(),
      },
    },
  });

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: popColor.hex(),
      }}
      elevation={3}
    >
      {/* Main word  */}
      <Grid container sx={{padding: '1rem'}}>
        <Grid item xs={12}>
          <CssTextField
            sx={{
              fontSize: titleFontSize,
              fontWeight: titleFontWeight,
              color: textColor.hex(),
            }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            label={'Word'}
          >
            {wordObj.word}
          </CssTextField>

          {wordObj.definitions.map((definition, index) => {
            return (
              <Typography
                key={index}
                sx={{
                  fontSize: definitionFontSize,
                  color: textColor.hex(),
                }}
              >
                {'- ' + definition}
              </Typography>
            );
          })}
        </Grid>
      </Grid>
    </Paper>
  );
};