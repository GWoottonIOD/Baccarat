import React from 'react'
import { Box, Typography } from '@mui/material';

export default function Footer() {

    return (
        <>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', my: 3 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Baccarat Central
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    All rights reserved.
                </Typography>
            </Box>
            {/* End footer */}
        </>
    )
}
