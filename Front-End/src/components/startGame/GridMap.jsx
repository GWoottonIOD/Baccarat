import React, { useState } from 'react'
import { Grid } from '@mui/material'

export default function GridMap(props) {
  return (
    <Grid container spacing={5}>
    <br/>
    {props.iterations.map((element, index) => (
      <Grid item key={index} lg={3}>
          {element}
      </Grid>
    ))}
    </Grid>
  )
}
