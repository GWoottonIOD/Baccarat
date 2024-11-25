import React, { useEffect, useState } from 'react'
import { Container, Box } from '@mui/material';
import { betStyle } from '../../../rules/Variables';
import DropDown from '../../reuseables/DropDown';
import GridMap from '../../reuseables/GridMap';
import useBetStyles from '../../../hooks/useBetStyles';

export default function BetStyles() {
    const [option, setOption] = useState(null);
    const [logicalOption, dispatch] = useBetStyles()

    useEffect(() => {
        dispatch(option)
    }, [option])

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
                    <DropDown name="Bet Style" options={betStyle} setOption={setOption} />
                <br />
                {logicalOption
                    ? <GridMap iterations={logicalOption} />
                    : null}
                    </Box>
            </Container>
        </>
    )
}
