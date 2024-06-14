import React from 'react'
import { Box, Container } from '@mui/material'
import AddCards from '../components/startGame/AddCards';
import { useHandContext } from '../context/HandContext';
import ShowStreak from '../components/startGame/ShowStreak';
import BetStyleButton from '../components/startGame/BetStyles/BetStyleButton';
import ReccomendedBet from '../components/startGame/ReccomendedBet';
import BettingTable from '../components/reuseables/BettingTable';
import { useBetStyleContext } from '../context/BetStyleContext';

export default function StartGame() {
    const { hand, setHand } = useHandContext()
    const { betStyle } = useBetStyleContext()

    return (
        <Container sx={{ py: 6 }} maxWidth="md">
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {betStyle === '3-Way Chasing'
                    ? <BettingTable />
                    : null}
                <BetStyleButton /><br/>
                <ShowStreak />
                <AddCards hand={hand} setHand={setHand} />
                <ReccomendedBet />
            </Box>
        </Container>
    )
}
