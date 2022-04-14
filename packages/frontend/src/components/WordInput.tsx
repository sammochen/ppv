import SaveIcon from '@mui/icons-material/Save';
import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useState} from 'react';
import {useWordEntry} from '../hooks/useWordEntry';
import {
  backgroundColor,
  secondaryColor,
  secondaryTextColor,
  textColor,
} from '../theme/colors';
import {titleFontSize, titleFontWeight} from '../theme/sizes';
import {MeaningRect} from './MeaningRect';

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

const StyledButton = styled(Button)({
  backgroundColor: backgroundColor.hex(),
  '&:hover': {
    backgroundColor: backgroundColor.hex(),
  },
});

export type WordInputProps = {
  onSubmitWord: (word: string) => void;
};
export const WordInput = ({onSubmitWord}: WordInputProps) => {
  const [textValue, setTextValue] = useState('');
  const {loading, wordEntry} = useWordEntry({word: textValue});

  const submit = () => {
    // submit only works if the word is valid
    if (wordEntry) onSubmitWord(textValue);
  };

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
        padding: '1rem',
      }}
      elevation={3}
    >
      <Grid container spacing={1} justifyContent="center">
        {/* Main word input  */}
        <Grid item xs={10}>
          <StyledTextField
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            label={'Word'}
            value={textValue}
            onChange={handleTextFieldChange}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                submit();
              }
            }}
          ></StyledTextField>
        </Grid>
        <Grid item xs={2}>
          <StyledButton
            variant="contained"
            fullWidth
            sx={{height: '100%'}}
            disabled={loading === true || wordEntry === null}
          >
            <SaveIcon />
          </StyledButton>
        </Grid>

        {/* Meanings */}
        {loading ? (
          <Grid item>
            <CircularProgress
              sx={{width: '100%', color: backgroundColor.hex()}}
            />
          </Grid>
        ) : wordEntry ? (
          wordEntry.meanings.map((meaning, index) => {
            return (
              <Grid key={index} item xs={12}>
                <MeaningRect meaning={meaning} index={index} />
              </Grid>
            );
          })
        ) : textValue.length > 0 ? (
          <Grid item>
            <Typography> {`oops :(`}</Typography>
          </Grid>
        ) : null}
      </Grid>
    </Paper>
  );
};
