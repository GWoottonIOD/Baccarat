import React, {useEffect, useState} from 'react'
import DropDown from '../DropDown'
import { Grid, Typography } from '@mui/material'
import StoreCards from './StoreCards';
import AddCard from './AddCard';
import { ruleOne, cards, suits } from '../../axios/rules/Rules';
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

  return (
    <>
    <Typography>
      Players Cards
    </Typography>
      <CardWithButton firstCard={firstCard} secondCard={secondCard}
       thirdCard={thirdCard} setFirstCard={setFirstCard} 
       setSecondCard={setSecondCard} setThirdCard={setThirdCard}/>
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
        ? thirdCard?null:<AddCard setCard={setThirdCard} number={number} suit={suit}/> 
        : null}
      </Grid>
    </Grid>
  </>
  )
}