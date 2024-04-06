import React from 'react'
import { Box } from '@mui/material'
import AddPlayerCards from '../components/startGame/AddPlayerCards';
import AddBankerCards from '../components/startGame/AddBankerCards';
import Results from '../components/startGame/Results';
import GridMap from '../components/startGame/GridMap';

export default function StartGame() {

    const betStyle = [{id: 1, name: 'bet style 1'}, {id: 2, name: 'bet style 2'}, {id: 3, name: 'bet style 3'}]

    return (

        <div className="plantInfo">
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
                <GridMap name="Bet Style" iterations={[1,2,3]} options={betStyle}/><br />
                <AddPlayerCards/><br />
                <AddBankerCards/><br />
                <Results/>
            </form>
            </Box>
        </div>
    )
}
