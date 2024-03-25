import React, {useState} from 'react'
import DropDown from '../DropDown'
import { Grid, Typography, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export default function AddBankerCards() {
  const [firstCard, setFirstCard] = useState([]);
  const [secondCard, setSecondCard] = useState([]);
  const [thirdCard, setThirdCard] = useState([]);
  const [number, setNumber] = useState([]);
  const [suit, setSuit] = useState([]);

  const cards = [
    {id: 1, name: '1'}, {id: 2, name: '2'}, {id: 3, name: '3'},
    {id: 3, name: '4'}, {id: 5, name: '5'}, {id: 6, name: '6'},
    {id: 7, name: '7'}, {id: 8, name: '8'}, {id: 9, name: '9'},
    {id: 10, name: '10'}, {id: 11, name: 'Jack'}, {id: 12, name: 'Queen'},
    {id: 13, name: 'King'}
  ]

  const suits = [
    {id: 1, name: 'Hearts'}, {id: 2, name: 'Clubs'},
    {id: 3, name: 'Spades'}, {id: 4, name: 'Diamonds'}
  ]
  return (
    <>
    <Typography>
            Bankers Cards
    </Typography>
    <Typography>
      {number} of {suit}
    </Typography>
    <Grid container spacing={2}>
      <Grid item>
        <DropDown name="Cards" options={cards} setOption={setNumber}/>
      </Grid>
      <Grid item>
        <DropDown name="Suits" options={suits} setOption={setSuit}/>
      </Grid>
      <Grid item>
        <Button variant="outlined" onClick={
          () => setFirstCard({number: number, suit: suit})}>
          <AddIcon/>
        </Button>
      </Grid>
    </Grid>
  </>
  )
}
