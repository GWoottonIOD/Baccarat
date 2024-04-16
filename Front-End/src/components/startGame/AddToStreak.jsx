import React from 'react'
import { Button } from '@mui/material'
import { useHandContext } from '../../context/HandContext'
import { useStreakContext } from '../../context/StreakContext'

export default function AddToStreak(props) {
    const { setHand } = useHandContext()
    const { streak, setStreak } = useStreakContext()

    const newGame = () => {
        setStreak([...streak, props.result])
        setHand([])
        console.log([...streak, props.result])
    }
  return (
    <>
      <Button variant="outlined" onClick={newGame}>
        New Game
      </Button>
    </>
  )
}
