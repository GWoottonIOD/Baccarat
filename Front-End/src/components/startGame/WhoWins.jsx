import { Button, Box } from '@mui/material'
import React from 'react'
import { useStreakContext } from '../../context/StreakContext'
import { createQuery } from '../../axios/AxiosFunctions'

export default function WhoWins() {
    const { streak, setStreak } = useStreakContext()

    const newGame = (winner) => {
        setStreak([...streak, winner])
        console.log([...streak, winner])
    }

    return (
        <>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Button variant="outlined" onClick={() => newGame('P')}>
                    Player wins
                </Button>
            </Box>

            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            ><Button variant="outlined" onClick={() => newGame('B')}>
                    Banker wins
                </Button>
            </Box>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            ><Button variant="outlined" onClick={() => newGame('T')}>
                    Tied
                </Button>
            </Box>

            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            ><Button variant="outlined" onClick={() =>
                createQuery('shoes', { shoe: streak })
                    .then(response => console.log(response))
                    .then(() => setStreak([]))
            }>
                Finish Shoe
            </Button></Box>
            
        </>
    )
}
