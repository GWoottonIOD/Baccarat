import React from 'react'
import StoreCards from './StoreCards'
import RemoveCard from './RemoveCard'
import GridMap from './GridMap';

export default function CardWithButton(props) {
  const arr = [
  props.firstCard
    ? <>
        <StoreCards storedCard={props.firstCard} />
        <RemoveCard setCard={props.setFirstCard} />
      </>
    : null,
  props.secondCard
  ? <>
      <StoreCards storedCard={props.firstCard} />
      <RemoveCard setCard={props.setFirstCard} />
    </>
    : null,
  props.thirdCard
  ? <>
      <StoreCards storedCard={props.thirdCard} />
      <RemoveCard setCard={props.setThirdCard} />
    </>
    : null]
  return (
    <>
      <GridMap iterations={arr}/>
      <br />
    </>
  )
}
