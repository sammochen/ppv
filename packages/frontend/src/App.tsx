import {AppBar, Grid, Toolbar, Typography} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import {WordPanel} from './components/WordPanel';
import {backgroundColor, secondaryColor, textColor} from './theme/colors';
import {stubWordList} from './utils/stub';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

/* --------------------------- Temporary mock data -------------------------- */
// Word list that is above the "new words" line

export const App = () => {
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
              width: '40rem',
              maxWidth: '80vw',
              padding: '1rem',
            }}
            spacing={1}
          >
            {stubWordList.map(wordObj => {
              return (
                <Grid item xs={12}>
                  <WordPanel wordObj={wordObj} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
