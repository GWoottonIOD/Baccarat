import React from 'react'
import { Grid, Box, Container } from '@mui/material'

export default function GridMap(props) {
  return (
    <>
      <Container sx={{}} maxWidth="xs">
        <Box
          sx={{
            bgcolor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Grid container spacing={0} xs={5.85} s={5.85} md={5.85} lg={5.85} xl={5.85}>
            <br />
            {props.iterations.map((element, index) => (
              <Grid item key={index} >
                {element}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}
