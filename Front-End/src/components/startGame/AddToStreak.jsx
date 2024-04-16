import React from 'react'
import { Button } from '@mui/material'

export default function AddToStreak(props) {
  return (
    <>
      <Button variant="outlined" onClick={
        // () => props.setStreak(props.streak + 1)
        () => console.log(props.result)
      }>
        New Game
      </Button>
    </>
  )
}
