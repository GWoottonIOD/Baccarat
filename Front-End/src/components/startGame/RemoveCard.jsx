import React from 'react'
import { Button } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';

export default function RemoveCard(props) {
  return (
    <>
        <Button variant="outlined" onClick={
          () => props.setCard(
            {number: null, suit: null}
            )}>
          <RemoveIcon/>
        </Button>
    </>
  )
}
