import React from 'react'
import { Typography } from '@mui/material'

export default function StoreCards(props) {
  return (
    <>
        <Typography>
            {props.storedCard.number} of {props.storedCard.suit}
        </Typography>
    </>
  )
}
