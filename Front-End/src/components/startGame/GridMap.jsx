import React, { useState } from 'react'
import { Grid } from '@mui/material'
import DropDown from '../DropDown'

export default function GridMap(props) {
    const [option, setOption] = useState([]);
  return (
    <Grid container spacing={2}>
    <br/>
    {/* {props.iterations.map(element => {
      <Grid item>
        {props.component}
      </Grid>
    })} */}
    <Grid item>
        <DropDown name="Bet Style" options={props.options} setOption={setOption}/>
    </Grid>
    <Grid item>
        <DropDown name="Variations" options={option} setOption={setOption}/>
    </Grid>
    <Grid item>
        <DropDown name="Variations" options={option} setOption={setOption}/>
    </Grid>
    </Grid>
  )
}
