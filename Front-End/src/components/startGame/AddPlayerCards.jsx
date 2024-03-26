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
    {id: 1, name: '1', value: 10}, {id: 2, name: '2', value: 10}, {id: 3, name: '3', value: 10},
    {id: 3, name: '4', value: 10}, {id: 5, name: '5', value: 10}, {id: 6, name: '6', value: 10},
    {id: 7, name: '7', value: 10}, {id: 8, name: '8', value: 10}, {id: 9, name: '9', value: 10},
    {id: 10, name: '10', value: 10}, {id: 11, name: 'Jack', value: 10}, {id: 12, name: 'Qu, value: 10een'},
    {id: 13, name: 'King', value: 10}
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