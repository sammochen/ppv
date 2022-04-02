import {Divider, Typography} from '@mui/material';

// Custom Divider component to separate words
export const WordDivider = () => {
  return (
    <Divider textAlign="right">
      <Typography sx={{color: '#888888'}}>New words</Typography>
    </Divider>
  );
};
