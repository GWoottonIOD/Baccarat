import React, { useState } from 'react'
import { Grid, Box, Container } from '@mui/material'

export default function GridMap(props) {
  return (
    <>
      <Container sx={{ py: 6 }} maxWidth="md">
        <Box
          sx={{
            bgcolor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Grid container spacing={5}>
            <br />
            {props.iterations.map((element, index) => (
              <Grid item key={index} lg={3}>
                {element}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}
