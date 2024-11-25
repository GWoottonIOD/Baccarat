import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useSearchContext } from '../context/SearchContext';
import Analytics from '../components/gameHistory/Analytics';

export default function GameHistory() {
  const { query } = useSearchContext();

  return (
    <Container sx={{ py: 6 }} maxWidth="md">
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Analytics/>
      </Box>
    </Container>
  );
}