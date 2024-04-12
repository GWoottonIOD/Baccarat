import React from 'react'
import StoreCards from './StoreCards'
import RemoveCard from './RemoveCard'
import GridMap from './GridMap';

export default function CardWithButton(props) {
  const arr = [
  props.firstCard
    ? <>
        {props.firstCard.number 
        ? <>
            <StoreCards storedCard={props.firstCard} />
            <RemoveCard setCard={props.setFirstCard} />
          </>
        :null}
      </>
    : null,
  props.secondCard
  ? <>
        {props.secondCard.number 
        ? <>
            <StoreCards storedCard={props.secondCard} />
            <RemoveCard setCard={props.setSecondCard} />
          </>
        :null}
      </>
    : null,
  props.thirdCard
  ? <>
        {props.thirdCard.number 
        ? <>
            <StoreCards storedCard={props.thirdCard} />
            <RemoveCard setCard={props.setThirdCard} />
          </>
        :null}
      </>
    : null,
  ]
  return (
    <>
      <GridMap iterations={arr}/>
      <br />
    </>
  )
}
