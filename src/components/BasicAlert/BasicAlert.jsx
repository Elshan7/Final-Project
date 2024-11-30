import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlert() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">Item is already in the basket!</Alert>
    </Stack>
  );
}
