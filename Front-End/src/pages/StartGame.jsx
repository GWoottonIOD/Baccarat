import React from 'react'
import { Box, Container } from '@mui/material'
import AddCards from '../components/startGame/AddCards';
import { useHandContext } from '../context/HandContext';
import ShowStreak from '../components/startGame/ShowStreak';
import BetStyleButton from '../components/startGame/BetStyles/BetStyleButton';
import BettingTable from '../components/reuseables/BettingTable';
import { useBetStyleContext } from '../context/BetStyleContext';
import WhoWins from '../components/startGame/WhoWins';
import ShowBasicStreak from '../components/startGame/ShowBasicStreak';
import StartServer from '../components/startGame/StartServer';

export default function StartGame() {
    const { hand, setHand } = useHandContext()
    const { betStyle } = useBetStyleContext()

    return (
        <Container sx={{ py: 6 }} maxWidth="md">
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
                {/* {betStyle === '3-Way Chasing'
                    ? <BettingTable />
                    : null} */}
                {/* <BetStyleButton /><br/> */}
                {/* <ShowStreak /> */}
                <StartServer/>
                <ShowBasicStreak/>
                <WhoWins/>
                {/* <AddCards hand={hand} setHand={setHand} /> */}
            </Box>
        </Container>
    )
}
