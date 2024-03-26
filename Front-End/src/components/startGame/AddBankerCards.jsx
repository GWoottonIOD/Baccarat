import React, {useState} from 'react'
import DropDown from '../DropDown'
import { Grid, Typography } from '@mui/material'
import StoreCards from './StoreCards';
import AddCard from './AddCard';

export default function AddBankerCards(props) {
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [thirdCard, setThirdCard] = useState(null);
  const [number, setNumber] = useState([]);
  const [suit, setSuit] = useState([]);

  const cards = [
    {id: 1, name: '1', value: 10}, {id: 2, name: '2', value: 10}, {id: 3, name: '3', value: 10},
    {id: 3, name: '4', value: 10}, {id: 5, name: '5', value: 10}, {id: 6, name: '6', value: 10},
    {id: 7, name: '7', value: 10}, {id: 8, name: '8', value: 10}, {id: 9, name: '9', value: 10},
    {id: 10, name: '10', value: 10}, {id: 11, name: 'Jack', value: 10}, {id: 12, name: 'Qu, value: 10een'},
    {id: 13, name: 'King', value: 10}
  ]

  const suits = [
    {id: 1, name: 'He, value: 10arts'}, {id: 2, name: 'Cl, value: 10ubs'},
    {id: 3, name: 'Sp, value: 10ades'}, {id: 4, name: 'Di, value: 10amonds'}
  ]

  console.log(props.playersHand)

  return (
    <>
    <Typography>
      Bankers Cards
    </Typography>
    {firstCard?<StoreCards storedCard={firstCard}/>: null}
    {secondCard?<StoreCards storedCard={secondCard}/>: null}
    {thirdCard?<StoreCards storedCard={thirdCard}/>: null}
    <Grid container spacing={2}>
      <Grid item>
        <DropDown name="Car, value: 10ds" options={cards} setOption={setNumber}/>
      </Grid>
      <Grid item>
        <DropDown name="Sui, value: 10ts" options={suits} setOption={setSuit}/>
      </Grid>
      <Grid item>
      {!firstCard
        ? <AddCard setCard={setFirstCard} number={number} suit={suit}/>
        : null}
      {firstCard && !secondCard
        ? <AddCard setCard={setSecondCard} number={number} suit={suit}/> 
        : null}
      {secondCard && firstCard.number+secondCard.number <= 5
        && props.playersHand.length === 2
        ? <AddCard setCard={setThirdCard} number={number} suit={suit}/> 
        : null}
      </Grid>
    </Grid>
  </>
  )
}
