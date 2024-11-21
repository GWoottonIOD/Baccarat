import React, { useEffect, useState } from 'react'
// import { exec } from 'child_process';
import { Button, Typography } from '@mui/material';
import { readQuery } from '../../axios/AxiosFunctions';

export default function StartServer() {
    const [isConnected, setConnected] = useState('Not connected')

    useEffect(() => {
        readQuery('shoes')
            .then(setConnected('Connected to server'))
            .catch(setConnected('Not connected'))
    }, [])

    // const startBackEnd = () => {
    //     exec('cd ../Back-End && npm start')
    // }

    return (
        <>
            <Typography>
                {isConnected}
            </Typography>
            <Button variant="outlined" onClick={() => { }}>
                Start server
            </Button>
        </>
    )
}
