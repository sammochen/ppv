import {AppBar, Grid, Toolbar, Typography} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import {NewWordModal} from './components/NewWordModal';
import {WordPanel} from './components/WordPanel';
import {backgroundColor, secondaryColor, textColor} from './theme/colors';
import {WordItem} from './utils/types';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

/* --------------------------- Temporary mock data -------------------------- */
// Word list that is above the "new words" line
const wordList: WordItem[] = [
  {
    word: 'extraneous',
    author: 'Sam',
    date: new Date('2/1/22'),
  },
  {
    word: 'guile',
    author: 'Anubhav',
    date: new Date('2/1/22'),
  },
  {
    word: 'wombat',
    author: 'Sam',
    date: new Date('2/1/22'),
  },
  {
    word: 'fungible',
    author: 'Sam',
    date: new Date('2/1/22'),
  },
  {
    word: 'azure',
    author: 'Anubhav',
    date: new Date('2/1/22'),
  },
  {
    word: 'voracious',
    author: 'Anubhav',
    date: new Date('2/1/22'),
  },
];

export const App = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={{backgroundColor: backgroundColor.hex(), minHeight: '100vh'}}>
      {/* Top app bar */}
      <AppBar
        sx={{backgroundColor: secondaryColor.hex()}}
        position="static"
        elevation={5}
      >
        <Toolbar>
          <Typography variant="h5" sx={{flexGrow: 1, color: textColor.hex()}}>
            ++vocabulary
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main component */}
      <Grid container justifyContent={'center'} sx={{padding: '2rem'}}>
        <Grid item>
          <Grid
            container
            sx={{
              width: '30rem',
              maxWidth: '80vw',
              padding: '1rem',
            }}
            spacing={1}
          >
            {wordList.map(wordItem => {
              return (
                <Grid item xs={12}>
                  <WordPanel wordItem={wordItem} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>

      {/* The modal that opens on adding a new word */}
      <NewWordModal
        modalOpen={modalOpen}
        onClose={handleModalClose}
      ></NewWordModal>
    </Box>
  );
};
