import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export default function AddCard(props) {
  return (
    <>
        <Button variant="outlined" onClick={
          () => props.setCard(
            {number: props.number, suit: props.suit}
            )}>
          <AddIcon/>
        </Button>
    </>
  )
}
