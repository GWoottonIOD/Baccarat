import React, {useEffect, useState} from 'react'
import DropDown from '../DropDown'
import { Grid, Typography } from '@mui/material'
import StoreCards from './StoreCards';
import AddCard from './AddCard';
import { ruleOne } from '../../axios/rules/Rules';
import { usePlayerHandContext } from '../../context/PlayerHandContext';
import RemoveCard from './RemoveCard';
import CardWithButton from './CardWithButton';

export default function AddPlayerCards() {
  const {firstCard, setFirstCard, secondCard, setSecondCard,
    thirdCard, setThirdCard, playersHand, setPlayersHand} 
    = usePlayerHandContext()
  const [number, setNumber] = useState([]);
  const [suit, setSuit] = useState([]);

  useEffect(() => {
    !thirdCard
      ? setPlayersHand([firstCard, secondCard]) 
      : setPlayersHand([firstCard, secondCard, thirdCard])
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

  return (
    <>
    <Typography>
      Players Cards
    </Typography>
    {firstCard
      ?<>
        <StoreCards storedCard={firstCard}/>
        <RemoveCard setCard={setFirstCard}/>
        </>
      : null}
    {secondCard
      ?<>
        <StoreCards storedCard={secondCard}/>
        <RemoveCard setCard={setSecondCard}/>
      </>
      : null}
    {thirdCard
      ?<>
        <StoreCards storedCard={thirdCard}/>
        <RemoveCard setCard={setThirdCard}/>
      </>
      : null}
      {/* <CardWithButton hand={playersHand}/> */}
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
      {ruleOne(firstCard, secondCard)
        ? <AddCard setCard={setThirdCard} number={number} suit={suit}/> 
        : null}
      </Grid>
    </Grid>
  </>
  )
}