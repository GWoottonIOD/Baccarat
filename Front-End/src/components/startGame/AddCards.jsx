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
import RemoveCard from './RemoveCard';
import { ruleOne, ruleTwo } from '../../rules/Rules';

export default function AddCards(props) {
    const [number, setNumber] = useState([]);
    const [suit, setSuit] = useState([]);
    const player = props.hand.length == 0 || props.hand.length == 2
            ? 'Player'
            : ruleOne(props.hand[0], props.hand[2]) && props.hand.length >= 4
                ? 'Player'
                // : 'Banker'
                : ruleTwo(props.hand[1], props.hand[3]) && props.hand.length >= 4
                    ? 'Banker'
                    : null
    return (
        <div>
            <Grid container spacing={4}>
                {props.hand.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: 225 }}
                        >
                            <CardContent sx={{ flexGrow: 2 }}>
                                <Typography gutterBottom variant="h5" component="h2" className='capitalise'>
                                    {card?.player}
                                </Typography>
                                {card.number} of {card.suit}
                            </CardContent>
                            <CardActions sx={{ marginTop: 'auto', justifyContent: 'center' }}>
                                {/* <PaidDeleteComponent debt={card}/> */}
                                <RemoveCard slot={index} />
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: 225 }}
                    >
                        <CardContent sx={{ flexGrow: 2 }}>
                            <Typography gutterBottom variant="h5" component="h2" className='capitalise'>
                                {player}
                            </Typography>
                            <DropDown name="Cards" options={cards} setOption={setNumber} />
                            <DropDown name="Suits" options={suits} setOption={setSuit} />
                        </CardContent>
                        <CardActions sx={{ marginTop: 'auto', justifyContent: 'center' }}>
                            {/* <PaidDeleteComponent debt={card}/> */}
                            <AddCard number={number} suit={suit} player={player} />
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}