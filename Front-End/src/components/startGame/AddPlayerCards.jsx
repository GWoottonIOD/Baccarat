import React, {useEffect, useState} from 'react'
import DropDown from '../DropDown'
import { Grid, Typography } from '@mui/material'
import StoreCards from './StoreCards';
import AddCard from './AddCard';

export default function AddPlayerCards(props) {
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [thirdCard, setThirdCard] = useState(null);
  const [number, setNumber] = useState([]);
  const [suit, setSuit] = useState([]);

  useEffect(() => {
    !thirdCard
      ? props.setPlayersHand([firstCard, secondCard]) 
      : props.setPlayersHand([firstCard, secondCard, thirdCard])
  },[firstCard, secondCard, thirdCard])

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

  // console.log(firstCard.number+secondCard.number <= 5)

  return (
    <>
    <Typography>
      Players Cards
    </Typography>
    {firstCard?<StoreCards storedCard={firstCard}/>: null}
    {secondCard?<StoreCards storedCard={secondCard}/>: null}
    {thirdCard?<StoreCards storedCard={thirdCard}/>: null}
    <Grid container spacing={2}>
      <Grid item>
        <DropDown name="Cards" options={cards} setOption={setNumber}/>
      </Grid>
      <Grid item>
        <DropDown name="Suits" options={suits} setOption={setSuit}/>
      </Grid>
      <Grid item>
      {!firstCard
        ? <AddCard setCard={setFirstCard} number={number} suit={suit}/>
        : null}
      {firstCard && !secondCard
        ? <AddCard setCard={setSecondCard} number={number} suit={suit}/> 
        : null}
      {secondCard && firstCard.number+secondCard.number <= 5
        ? <AddCard setCard={setThirdCard} number={number} suit={suit}/> 
        : null}
      </Grid>
    </Grid>
  </>
  )
}