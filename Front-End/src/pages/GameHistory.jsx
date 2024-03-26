import React, {useState} from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import { useEffect, useContext } from 'react';
// import { DebtContext } from '../context/DebtContext';
// import { PageTypeContext } from '../context/PageTypeContext'
// import { SearchContext } from '../context/SearchContext'
// import FilterComponent from '../components/transactions/FilterComponent';
// import { readQuery } from '../axios/AxiosFunctions';
// import { useCurrentUserContext } from '../context/CurrentUserContext';
import BasicLineChart from '../components/Chart';
import DropDown from '../components/DropDown';

export default function GameHistory() {
  // const { pageType, setPageType } = useContext(PageTypeContext);
  // const [option, setOption] = useState([]);
  // const { currentUser } = useCurrentUserContext()
  // const { debts, setDebts } = useContext(DebtContext);
  const { query } = useContext(SearchContext);
  // const debtsPerPage = 6;

  const betStyle = [{id: 1, name: 'bet style 1'}, {id: 2, name: 'bet style 2'}, {id: 3, name: 'bet style 3'}]

  // //get the unpaid debts
//   useEffect(() => {
//     query.query==='' 
//       ? readQuery('games').then(response => setDebts(response))
//       : readQuery('games', query.query, 'userdebts').then(response => setDebts(response))
//     setPageType('games')
// }, [query.query])

  return (
    <>
      <CssBaseline />
      <main>
        <Container sx={{ py: 14,  }} maxWidth="md">
          <Typography>
            A list of played games
          </Typography>
          <br />
          <DropDown name="Bet Style" options={betStyle} setOption={setOption}/>
          <BasicLineChart/>
          {/* {currentUser ?<FilterComponent debts={debts} currentUser={currentUser}/>:null} */}
        </Container>
      </main>
      </>
  );
}