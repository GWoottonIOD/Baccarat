import React, {useEffect, useState} from 'react'
import DropDown from '../DropDown'
import { Typography } from '@mui/material'
import AddCard from './AddCard';
import { ruleOne } from '../../rules/Rules';
import { cards, suits } from '../../rules/Variables';
import { usePlayerHandContext } from '../../context/PlayerHandContext';
import CardWithButton from './CardWithButton';
import GridMap from './GridMap';
import { useBankerHandContext } from '../../context/BankerHandContext';

export default function AddPlayerCards() {
  const {firstCard, setFirstCard, secondCard, setSecondCard,
    thirdCard, setThirdCard, playersHand, setPlayersHand} 
    = usePlayerHandContext()
  const { bankersHand } = useBankerHandContext()
  const [number, setNumber] = useState([]);
  const [suit, setSuit] = useState([]);

  useEffect(() => {
    !thirdCard
      ? setPlayersHand([firstCard, secondCard]) 
      : setPlayersHand([firstCard, secondCard, thirdCard])
  },[firstCard, secondCard, thirdCard])

  const arr = [
    thirdCard || firstCard?.number + secondCard?.number >5 
      ? null
      : !firstCard
        ? <DropDown name="Cards" options={cards} setOption={setNumber}/>
        : bankersHand[1]?.number && !secondCard
          ? <DropDown name="Cards" options={cards} setOption={setNumber}/>
          : null,
    thirdCard || firstCard?.number + secondCard?.number >5
      ? null
      : !firstCard
        ? <DropDown name="Suits" options={suits} setOption={setNumber}/>
        : bankersHand[1]?.number && !secondCard
          ? <DropDown name="Suits" options={suits} setOption={setNumber}/>
          : null,
    !firstCard
      ? <AddCard setCard={setFirstCard} number={number} suit={suit}/>
      : null,
    firstCard && !secondCard && bankersHand[1]?.number
      ? <AddCard setCard={setSecondCard} number={number} suit={suit}/> 
      : null,
    ruleOne(firstCard, secondCard)
      ? thirdCard?null:<AddCard setCard={setThirdCard} number={number} suit={suit}/> 
      : null
    ]

  return (
    <>
    <Typography>
      Players Cards
    </Typography>
      <CardWithButton firstCard={firstCard} secondCard={secondCard}
       thirdCard={thirdCard} setFirstCard={setFirstCard} 
       setSecondCard={setSecondCard} setThirdCard={setThirdCard}/>
    <GridMap iterations={arr}/>
  </>
  )
}