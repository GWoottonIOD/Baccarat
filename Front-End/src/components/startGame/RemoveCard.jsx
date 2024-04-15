import React from 'react'
import { Button } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import { useHandContext } from '../../context/HandContext';

export default function RemoveCard(props) {
  const { hand, setHand } = useHandContext()
  const findCardToRemove = hand[props.slot]

  return (
    <>
      <Button variant="outlined"
        onClick={
          () => setHand(
            hand.filter((card) => card !== findCardToRemove)
          )}>
        <RemoveIcon />
      </Button>
    </>
  )
}
