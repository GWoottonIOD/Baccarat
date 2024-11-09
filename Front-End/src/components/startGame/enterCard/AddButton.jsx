import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useHandContext } from '../../../context/HandContext';

export default function AddButton(props) {
  const { hand, setHand } = useHandContext()

  const newCard = {number: parseInt(props.number),
  suit: props.suit,
  player: 
    props.player
    }
  return (
    <>
      <Button variant="outlined" onClick={
        () => setHand([
            ...hand,
            newCard 
        ])
    }>
        <AddIcon />
      </Button>
    </>
  )
}
