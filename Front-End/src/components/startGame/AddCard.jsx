import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useHandContext } from '../../context/HandContext';

export default function AddCard(props) {
  const { hand, setHand } = useHandContext()
  console.log(hand.length)
  return (
    <>
      <Button variant="outlined" onClick={
        () => setHand([{
          number: parseInt(props.number),
          suit: props.suit,
          player: 
            hand.length == 1 || hand.length == 3 
              ? true 
              : false
            },
          ...hand 
        ])}>
        <AddIcon />
      </Button>
    </>
  )
}
