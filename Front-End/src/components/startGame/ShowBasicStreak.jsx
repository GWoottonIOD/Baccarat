import React, { useEffect } from 'react'
import { useStreakContext } from '../../context/StreakContext'
import { Typography } from '@mui/material'
import { createQuery } from '../../axios/AxiosFunctions'

export default function ShowBasicStreak() {
    const { streak, setStreak } = useStreakContext()

    useEffect(() => {
        if (streak.length === 40) {
            createQuery('shoes', {shoe: streak})
            .then(response => console.log(response))
            .then(() => setStreak([]))
        }
    }, [streak])

    return (
        <>
            <Typography>
                {streak ? streak.map((i)=> `${i},`) : 'No Streak'}
            </Typography>
        </>
    )
}
