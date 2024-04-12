import React, { useState } from 'react'
import { Box, Container } from '@mui/material'
import AddPlayerCards from '../components/startGame/AddPlayerCards';
import AddBankerCards from '../components/startGame/AddBankerCards';
import Results from '../components/startGame/Results';
import GridMap from '../components/startGame/GridMap';
import DropDown from '../components/DropDown';
import { ruleOne } from '../rules/Rules';
import { betStyle, streakLength } from '../rules/Variables';
import { usePlayerHandContext } from '../context/PlayerHandContext';
import AddCards from '../components/startGame/AddCards';
import { useHandContext } from '../context/HandContext';

export default function StartGame() {
    const [option, setOption] = useState(null);
    const {hand, setHand} = useHandContext()
    const arr = [<DropDown name="Streak Length" options={streakLength} setOption={setOption} />,
    <DropDown name="Variations" options={option} setOption={setOption} />,
    ]

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
                    <DropDown name="Bet Style" options={betStyle} setOption={setOption} />
                    {option
                        ?<><GridMap iterations={arr} /><br /></>
                        :null}
                    <br />
                    <AddCards hand={hand} setHand={setHand}/>
                    <br />
                    <Results />
                </form>
            </Box>
        </Container>
    )
}
