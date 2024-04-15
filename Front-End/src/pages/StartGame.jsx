import React from 'react'
import { Box, Container } from '@mui/material'
import Results from '../components/startGame/Results';
import AddCards from '../components/startGame/AddCards';
import { useHandContext } from '../context/HandContext';
import BetStyles from './BetStyles';

export default function StartGame() {
    const {hand, setHand} = useHandContext()
    
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 5,
                    pb: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <form>
                    <BetStyles/>
                    <AddCards hand={hand} setHand={setHand}/>
                    <br />
                    <Results />
                </form>
            </Box>
        </Container>
    )
}
