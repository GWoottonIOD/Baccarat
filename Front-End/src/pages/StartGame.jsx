import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import { useNavigate } from "react-router-dom";
import DropDown from '../components/DropDown';
import { readQuery } from '../axios/AxiosFunctions'; 
import Inputs from '../components/newTransaction/Inputs';
import { useCurrentUserContext } from '../context/CurrentUserContext';
import GridDrop from '../components/startGame/GridDrop';
import AddPlayerCards from '../components/startGame/AddPlayerCards';
import AddBankerCards from '../components/startGame/AddBankerCards';

export default function StartGame() {
    const { currentUser } = useCurrentUserContext()
    const [result, setResult] = useState(false);
    let navigate = useNavigate();

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
                <GridDrop name="Bet Style" iterations={[1,2,3]} options={betStyle}/><br />
                <AddPlayerCards/><br />
                <AddBankerCards/>
                <br/>
                <div>{result?userObj.name:"Result"}</div>
                {/* {user?<Inputs user={user} userId={userId}/>: null} */}
            </form>
            </Box>
        </div>
    )
}
