import React, {useState, useEffect} from 'react'
import DropDown from '../DropDown'
import { Grid, Typography } from '@mui/material'
import StoreCards from './StoreCards';
import AddCard from './AddCard';
import { ruleTwo, ruleThree, ruleFour, ruleFive, 
  ruleSix, ruleSeven, cards, suits } from '../../axios/rules/Rules';
import { useBankerHandContext } from '../../context/BankerHandContext';
import { usePlayerHandContext } from '../../context/PlayerHandContext';
import CardWithButton from './CardWithButton';
import GridMap from './GridMap';

export default function AddBankerCards() {
  const {firstCard, setFirstCard, secondCard, setSecondCard,
    thirdCard, setThirdCard, setBankersHand} 
    = useBankerHandContext()
  const { playersHand } = usePlayerHandContext()
  const [number, setNumber] = useState([]);
  const [suit, setSuit] = useState([]);

  useEffect(() => {
    !thirdCard
      ? setBankersHand([firstCard, secondCard]) 
      : setBankersHand([firstCard, secondCard, thirdCard])
  },[firstCard, secondCard, thirdCard])

  const arr = [<DropDown name="Cards" options={cards} setOption={setNumber}/>,
    <DropDown name="Suits" options={suits} setOption={setSuit}/>,
    !firstCard
      ? <AddCard setCard={setFirstCard} number={number} suit={suit}/>
      : null,
    firstCard && !secondCard
      ? <AddCard setCard={setSecondCard} number={number} suit={suit}/> 
      : null,
      secondCard && !thirdCard 
      ? ruleTwo(firstCard, secondCard, playersHand)
      || ruleThree(firstCard, secondCard) 
      || ruleFour(firstCard, secondCard, playersHand)
      || ruleFive(firstCard, secondCard, playersHand)
      || ruleSix(firstCard, secondCard, playersHand)
      || ruleSeven(firstCard, secondCard, playersHand)
        ? <AddCard setCard={setThirdCard} number={number} suit={suit}/> 
        : null
      : null]

  return (
    <>
    <Typography>
      Bankers Cards
    </Typography>
    <CardWithButton firstCard={firstCard} secondCard={secondCard}
       thirdCard={thirdCard} setFirstCard={setFirstCard} 
       setSecondCard={setSecondCard} setThirdCard={setThirdCard}/>
    <GridMap iterations={arr}/>
  </>
  )
}
