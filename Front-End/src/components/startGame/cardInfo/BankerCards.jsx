import React from 'react'
import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import RemoveCard from './RemoveCard';

export default function BankerCards(props) {
  const bankerOnly = props.hand.filter((card) => card.player === 'Banker')
  return (
    <>
      {bankerOnly.map((card, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column', width: 225 }}
          >
            <CardContent sx={{ flexGrow: 2 }}>
              <Typography gutterBottom variant="h5" component="h2" className='capitalise'>
                {card?.player}
              </Typography>
              <Typography>
                {card.number} of {card.suit}
              </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: 'auto', justifyContent: 'center' }}>
              {/* <PaidDeleteComponent debt={card}/> */}
              <RemoveCard slot={index} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  )
}
