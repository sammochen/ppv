import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import {WordInput} from './components/WordInput';
import {WordPanel} from './components/WordPanel';
import {useAccount} from './hooks/useAccount';
import {useWordBank} from './hooks/useWordBank';
import {backgroundColor, secondaryColor, textColor} from './theme/colors';
import {AuthoredWordEntry, WordEntry} from './utils/types';

export const App = () => {
  const {switchAccount, getUserSetting} = useAccount();
  const {wordList, addAuthoredWordEntry} = useWordBank();

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

          <IconButton
            onClick={() => {
              switchAccount();
            }}
          >
            <Avatar
              sx={{
                bgcolor: getUserSetting().color.hex(),
                fontWeight: 700,
              }}
            >
              {getUserSetting().abbreviation}
            </Avatar>
          </IconButton>
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
            <Grid item xs={12}>
              <WordInput
                onSubmitWordEntry={(wordEntry: WordEntry) => {
                  const authoredWordEntry: AuthoredWordEntry = {
                    author: getUserSetting().name,
                    createTime: new Date().getTime(),
                    wordEntry: wordEntry,
                  };
                  addAuthoredWordEntry(authoredWordEntry);
                }}
              />
            </Grid>
            {wordList.map((authoredWordEntry: AuthoredWordEntry, index) => {
              return (
                <Grid item xs={12} key={index}>
                  <WordPanel authoredWordEntry={authoredWordEntry} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
