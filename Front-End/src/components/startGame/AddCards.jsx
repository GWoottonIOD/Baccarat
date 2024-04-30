import React from 'react'
import { Grid } from '@mui/material';
import PlayerCards from './PlayerCards.jsx';
import BankerCards from './BankerCards.jsx';
import AddToHand from './AddToHand.jsx';

export default function AddCards(props) {

    return (
        <div>
            <Grid container spacing={4}>
                <Grid item key={1} lg={3}>
                    <PlayerCards hand={props.hand} />
                </Grid>
                {/* Must align center and stay center */}
                <Grid item key={2} lg={3} sx={{alignItems: 'center'}}>
                    <AddToHand/>
                </Grid>
                <Grid item key={3} lg={3}>
                    <BankerCards hand={props.hand} />
                </Grid>
            </Grid>
        </div>
    )
}