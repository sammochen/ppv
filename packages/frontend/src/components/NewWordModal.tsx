import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import StarIcon from '@mui/icons-material/Star';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

type NewWordModalProps = {
  modalOpen: boolean;
  onClose: () => void;
};

// The modal which facilitates adding a new word
export const NewWordModal = ({modalOpen, onClose}: NewWordModalProps) => {
  const [isFavourite, setFavourite] = React.useState(false);

  const handleFavouriteButton = () => {
    setFavourite(!isFavourite);
  };

  const handleCrossButtonClick = () => {
    onClose();
  };

  const handleTickButtonClick = () => {
    onClose();
  };

  return (
    <Dialog
      open={modalOpen}
      onBackdropClick={() => onClose()}
      maxWidth={'sm'}
      fullWidth={true}
    >
      <DialogTitle>
        <Typography component={'span'} variant={'h6'}>
          New Word
        </Typography>
      </DialogTitle>
      <DialogContent>
        {/* Input components */}
        <Grid container direction={'column'} spacing={2}>
          <Grid item>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your word here"
            />
          </Grid>

          {/* The OK (tick) and Cancel (cross) buttons */}
          <Grid container item spacing={1} justifyContent={'end'}>
            <Grid item>
              <Button variant="outlined" onClick={handleTickButtonClick}>
                <StarIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={handleTickButtonClick}>
                <DoneIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={handleCrossButtonClick}>
                <CloseIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
