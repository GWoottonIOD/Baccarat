import React, { useState, useEffect } from 'react'
import DropDown from '../DropDown'
import { Typography } from '@mui/material'
import { cards, suits } from '../../rules/Variables';
import AddCard from './AddCard';
import {
  ruleTwo, ruleThree, ruleFour, ruleFive,
  ruleSix, ruleSeven
} from '../../rules/Rules';
import { useBankerHandContext } from '../../context/BankerHandContext';
import { usePlayerHandContext } from '../../context/PlayerHandContext';
import CardWithButton from './CardWithButton';
import GridMap from './GridMap';

export default function AddBankerCards() {
  const { firstCard, setFirstCard, secondCard, setSecondCard,
    thirdCard, setThirdCard, setBankersHand }
    = useBankerHandContext()
  const { playersHand } = usePlayerHandContext()
  const [number, setNumber] = useState([]);
  const [suit, setSuit] = useState([]);

  useEffect(() => {
    console.log(playersHand)
    !thirdCard
      ? setBankersHand([firstCard, secondCard])
      : setBankersHand([firstCard, secondCard, thirdCard])
  }, [firstCard, secondCard, thirdCard])

  const arr = [
    playersHand[0]?.number
      ? <DropDown name="Cards" options={cards} setOption={setNumber} />
      : !playersHand[1]?.number && !secondCard && playersHand[0]?.number
        ? <DropDown name="Cards" options={cards} setOption={setNumber} />
        : null,
    playersHand[0]?.number
      ? <DropDown name="Suits" options={suits} setOption={setNumber} />
      : !playersHand[1]?.number && !secondCard && playersHand[0]?.number
        ? <DropDown name="Suits" options={suits} setOption={setNumber} />
        : null,
    !firstCard && playersHand[0]?.number
      ? <AddCard setCard={setFirstCard} number={number} suit={suit} />
      : null,
    firstCard && !secondCard
      ? <AddCard setCard={setSecondCard} number={number} suit={suit} />
      : null,
    secondCard && !thirdCard
      ? ruleTwo(firstCard, secondCard, playersHand)
        || ruleThree(firstCard, secondCard)
        || ruleFour(firstCard, secondCard, playersHand)
        || ruleFive(firstCard, secondCard, playersHand)
        || ruleSix(firstCard, secondCard, playersHand)
        || ruleSeven(firstCard, secondCard, playersHand)
        ? <AddCard setCard={setThirdCard} number={number} suit={suit} />
        : null
      : null]

  return (
    <>
      <Typography>
        Bankers Cards
      </Typography>
      <CardWithButton firstCard={firstCard} secondCard={secondCard}
        thirdCard={thirdCard} setFirstCard={setFirstCard}
        setSecondCard={setSecondCard} setThirdCard={setThirdCard} />
      <GridMap iterations={arr} />
    </>
  )
}
