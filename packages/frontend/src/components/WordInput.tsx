import {Grid, Paper, TextField, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import React, {useState} from 'react';
import {secondaryColor, secondaryTextColor, textColor} from '../theme/colors';

const titleFontSize = '1.5rem';
const titleFontWeight = 550;
const definitionFontSize = '0.9rem';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& input': {
      color: textColor.hex(),
      fontSize: titleFontSize,
      fontWeight: titleFontWeight,
    },

    '& fieldset': {
      border: `1.5px solid ${secondaryTextColor.hex()}`,
    },

    '&:hover fieldset': {
      border: `1.5px solid ${secondaryTextColor.hex()}`,
    },

    '&.Mui-focused fieldset': {
      border: `2px solid ${secondaryTextColor.hex()}`,
    },
  },
  '& .MuiInputLabel-root': {
    color: secondaryTextColor.hex(),

    '&.Mui-focused': {
      color: secondaryTextColor.hex(),
    },
  },
});

export type WordInputProps = {
  onSubmitWord: (word: string) => void;
};
export const WordInput = ({onSubmitWord}: WordInputProps) => {
  const [textValue, setTextValue] = useState('');
  const wordObj = {word: 'hi', definitions: [], author: '', date: Date.now()};

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTextValue(event.target.value);
  };

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
        <Grid item xs={12}>
          <StyledTextField
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
            value={textValue}
            onChange={handleTextFieldChange}
          >
            {wordObj.word}
          </StyledTextField>

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
