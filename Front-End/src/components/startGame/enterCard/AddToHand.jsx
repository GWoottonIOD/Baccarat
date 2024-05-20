import React, { useState } from 'react'
import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { cards, suits } from '../../../rules/Variables';
import DropDown from '../../reuseables/DropDown';
import AddButton from './AddButton';
import usePlayer from '../../../hooks/usePlayer';
import Results from '../Results';

export default function AddToHand() {
    const [number, setNumber] = useState([]);
    const [suit, setSuit] = useState([]);
    const player = usePlayer()
    return (
        <Card
            sx={{ height: '100%', width: 225 }}
        >
            {player
                ? <>
                    <CardContent sx={{ flexGrow: 2 }}>

                        <Typography gutterBottom variant="h5" component="h2" className='capitalise'>
                            {player}
                        </Typography>
                        <DropDown name="Cards" options={cards} setOption={setNumber} />
                        <DropDown name="Suits" options={suits} setOption={setSuit} />
                    </CardContent>
                    <CardActions sx={{ marginTop: 'auto', justifyContent: 'center' }}>
                        {/* <PaidDeleteComponent debt={card}/> */}
                        {player
                            ? <AddButton number={number} suit={suit} player={player} />
                            : null
                        }
                    </CardActions>
                </>
                : null}
            <CardContent sx={{ flexGrow: 2 }}>
                <Results />
            </CardContent>
        </Card>

    )
}
