import React from 'react'
import StoreCards from './StoreCards'
import RemoveCard from './RemoveCard'

export default function CardWithButton(props) {
  return (
    <>
      {props.firstCard
        ? <>
          <StoreCards storedCard={props.firstCard} />
          <RemoveCard setCard={props.setFirstCard} />
        </>
        : null}
      {props.secondCard
        ? <>
          <StoreCards storedCard={props.secondCard} />
          <RemoveCard setCard={props.setSecondCard} />
        </>
        : null}
      {props.thirdCard
        ? <>
          <StoreCards storedCard={props.thirdCard} />
          <RemoveCard setCard={props.setThirdCard} />
        </>
        : null}
    </>
  )
}
