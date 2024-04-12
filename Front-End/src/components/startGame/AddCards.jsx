import React, { useState } from 'react'
import {
     Card, CardActions, CardContent, Grid, Typography
} from '@mui/material';
import { cards, suits } from '../../rules/Variables';
import OverdueComponent from '../transactions/OverdueComponent';
import PaidComponent from '../transactions/PaidComponent';
import PaidDeleteComponent from './PaidDeleteComponent';
import DropDown from '../DropDown';
import AddCard from './AddCard';

export default function AddCards(props) {
    const [number, setNumber] = useState([]);
    const [suit, setSuit] = useState([]);
    return (
        <div>
            <Grid container spacing={4}>
                {props.hand.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: 225 }}
                        >
                            <CardContent sx={{ flexGrow: 2}}>
                                <Typography gutterBottom variant="h5" component="h2" className='capitalise'>
                                    {index==0 || index == 2 ? 'Player' : 'Banker'}
                                </Typography>
                                {card?.number
                                    ? `${card.number} of ${card.suit}`
                                    :<><DropDown name="Cards" options={cards} setOption={setNumber}/>
                                        <DropDown name="Suits" options={suits} setOption={setSuit}/></>}
                                {/* <PaidComponent debt={card} />  */}
                            </CardContent>
                            <CardActions sx={{ marginTop: 'auto', justifyContent: 'center'}}>
                                {/* <PaidDeleteComponent debt={card}/> */}
                                {card?.number?null:<AddCard number={number} suit={suit}/>}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}