import React from 'react'
import { Box, Container } from '@mui/material'
import Results from '../components/startGame/Results';
import AddCards from '../components/startGame/AddCards';
import { useHandContext } from '../context/HandContext';
import BetStyles from './BetStyles';
import ShowStreak from '../components/startGame/ShowStreak';

export default function StartGame() {
    const {hand, setHand} = useHandContext()

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
                <form>
                    <BetStyles/>
                    <ShowStreak/>
                    <AddCards hand={hand} setHand={setHand}/>
                </form>
            </Box>
        </Container>
    )
}
