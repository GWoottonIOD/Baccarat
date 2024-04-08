import React, { useState } from 'react'
import { Box, Container } from '@mui/material'
import AddPlayerCards from '../components/startGame/AddPlayerCards';
import AddBankerCards from '../components/startGame/AddBankerCards';
import Results from '../components/startGame/Results';
import GridMap from '../components/startGame/GridMap';
import DropDown from '../components/DropDown';

export default function StartGame() {
    const [option, setOption] = useState([]);
    const betStyle = [{ id: 1, name: 'Single Bet' }, { id: 2, name: 'Single Chase' }, { id: 3, name: 'Multi Single Chase' }]
    const arr = [<DropDown name="Bet Style" options={option} setOption={setOption} />,
    <DropDown name="Variations" options={option} setOption={setOption} />,
        // <DropDown name="Variations" options={option} setOption={setOption}/>
    ]

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 15,
                    pb: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <form>
                    <GridMap iterations={arr} options={betStyle} /><br />
                    <AddPlayerCards /><br />
                    <AddBankerCards /><br />
                    <Results />
                </form>
            </Box>
        </Container>
    )
}
