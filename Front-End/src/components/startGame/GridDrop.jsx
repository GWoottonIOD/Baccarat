import React, { useState } from 'react'
import { Grid } from '@mui/material'
import DropDown from '../DropDown'

export default function GridDrop(props) {
    const [option, setOption] = useState([]);
    // console.log(props.name)
  return (
    <Grid container spacing={2}>
    <br/>
    {/* {props.iterations.map(element => {
      <Grid item>
        <DropDown name={props.name} options={props.options} setOption={setOption}/>
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
