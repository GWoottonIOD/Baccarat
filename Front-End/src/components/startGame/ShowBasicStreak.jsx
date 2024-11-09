import React from 'react'
import { useStreakContext } from '../../context/StreakContext'
import { Typography } from '@mui/material'

export default function ShowBasicStreak() {
    const { streak, setStreak } = useStreakContext()

    return (
        <>
            <Typography>
                {streak ? streak.map((i)=> `${i},`) : 'No Streak'}
            </Typography>
        </>
    )
}
