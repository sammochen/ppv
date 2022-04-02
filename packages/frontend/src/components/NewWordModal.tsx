import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
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
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography component={'span'} variant={'h6'}>
            New Word
          </Typography>

          {/* Favourite icon */}
          <IconButton onClick={handleFavouriteButton}>
            {isFavourite ? <StarIcon /> : <StarOutlineIcon />}
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        {/* Input components */}
        <Grid container direction={'column'} spacing={3}>
          <Grid item>
            <Typography>Word</Typography>
            <TextField
              fullWidth
              variant="standard"
              placeholder="Enter your word here"
            />
          </Grid>
          <Grid item>
            <Typography>Comments</Typography>
            <TextField fullWidth multiline rows={4} placeholder="Optional" />
          </Grid>

          {/* The OK (tick) and Cancel (cross) buttons */}
          <Grid container item spacing={0.5} justifyContent={'end'}>
            <Grid item>
              <Button variant="outlined" onClick={handleTickButtonClick}>
                <DoneIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                sx={{marginLeft: '0.5rem'}}
                onClick={handleCrossButtonClick}
              >
                <CloseIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
