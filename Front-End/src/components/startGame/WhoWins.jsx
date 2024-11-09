import { Button } from '@mui/material'
import React from 'react'
import { useStreakContext } from '../../context/StreakContext'

export default function WhoWins() {
    const { streak, setStreak } = useStreakContext()

    const newGame = (winner) => {
        setStreak([...streak, winner])
        console.log([...streak, winner])
    }

    return (
        <>
            <Button variant="outlined" onClick={() =>newGame('P')}>
                Player wins
            </Button><br />
            <Button variant="outlined" onClick={() => newGame('B')}>
                Banker wins
            </Button><br />
            <Button variant="outlined" onClick={() => newGame('T')}>
                Tied
            </Button>
        </>
    )
}
