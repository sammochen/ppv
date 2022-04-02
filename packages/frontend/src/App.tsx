import AddIcon from '@mui/icons-material/Add';
import {AppBar, Fab, Grid, Toolbar, Typography} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import {NewWordModal} from './components/NewWordModal';
import {WordDivider} from './components/WordDivider';
import {WordPanel} from './components/WordPanel';
import {WordItem} from './utils/types';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

/* --------------------------- Temporary mock data -------------------------- */
// Word list that is above the "new words" line
const wordList1: WordItem[] = [
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
];
// Word list that is below the "new words" line
const wordList2: WordItem[] = [
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
    <Box sx={{backgroundColor: '#83BCFF', minHeight: '100vh'}}>
      {/* Top app bar */}
      <AppBar position="static" elevation={5}>
        <Toolbar>
          <Typography variant="h5" sx={{flexGrow: 1}}>
            ++vocabulary
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Bottom right floating action button */}
      <Fab
        variant="extended"
        sx={{position: 'absolute', right: '2rem', bottom: '2rem'}}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <AddIcon sx={{mr: 1}} />
        Add Word
      </Fab>

      {/* Main component */}
      <Grid container justifyContent={'center'} sx={{padding: '2rem'}}>
        <Grid item>
          <Grid
            container
            sx={{
              width: '60vw',
              padding: '1rem',
            }}
            spacing={1}
          >
            {wordList1.map(wordItem => {
              return (
                <>
                  <Grid item>
                    <WordPanel wordItem={wordItem} />
                  </Grid>
                  <Box sx={{width: '100%'}}></Box>
                </>
              );
            })}
            <Grid item xs={12}>
              <WordDivider />
            </Grid>
            {wordList2.map(wordItem => {
              return (
                <>
                  <Grid item>
                    <WordPanel wordItem={wordItem} />
                  </Grid>
                  <Grid item sx={{width: '100%'}}></Grid>
                </>
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
