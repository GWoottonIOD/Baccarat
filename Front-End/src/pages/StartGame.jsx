import React from 'react'
import { Box, Container } from '@mui/material'
import AddCards from '../components/startGame/AddCards';
import { useHandContext } from '../context/HandContext';
import ShowStreak from '../components/startGame/ShowStreak';
import BetStyleButton from '../components/startGame/BetStyles/BetStyleButton';

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
                    <BetStyleButton/>
                    <ShowStreak/>
                    <AddCards hand={hand} setHand={setHand}/>
                </form>
            </Box>
        </Container>
    )
}
