import React from 'react'
import StoreCards from './StoreCards'
import RemoveCard from './RemoveCard'

export default function CardWithButton(props) {
  console.log(props.hand)
  // const firstCard = props.hand.firstCard
  // const secondCard = props.hand.secondCard
  // const thirdCard = props.hand.thirdCard
  // const setFirstCard = props.hand.setFirstCard
  // const setSecondCard = props.hand.setSecondCard
  // const setThirdCard = props.hand.setThirdCard

  return (
    <>
      {/* {firstCard
        ? <>
          <StoreCards storedCard={firstCard} />
          <RemoveCard setCard={setFirstCard} />
        </>
        : null}
      {secondCard
        ? <>
          <StoreCards storedCard={secondCard} />
          <RemoveCard setCard={setSecondCard} />
        </>
        : null}
      {thirdCard
        ? <>
          <StoreCards storedCard={thirdCard} />
          <RemoveCard setCard={setThirdCard} />
        </>
        : null} */}
    </>
  )
}
