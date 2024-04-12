import React from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import BasicLineChart from '../components/Chart';
import DropDown from '../components/DropDown';
import { useSearchContext } from '../context/SearchContext';

export default function GameHistory() {
  const { query } = useSearchContext();

  return (
    <>
      <CssBaseline />
      <main>
        <Container sx={{ py: 14,  }} maxWidth="md">
          <Typography>
            A list of played games
          </Typography>
          <br />
          {/* <DropDown name="Bet Style" options={betStyle} setOption={setOption}/> */}
          <BasicLineChart/>
        </Container>
      </main>
      </>
  );
}