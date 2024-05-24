import React, {useEffect, useState} from 'react'
import { useBetStyleContext } from '../../context/BetStyleContext'
import { SingleBet } from '../../rules/BettingRules'
import { useStreakContext } from '../../context/StreakContext'
import { Typography } from '@mui/material'

export default function ReccomendedBet() {
    const { streakLength, betSize, chaseLength, noOfPlayers,
        chaseDepth, chaseWidth, betStyle} = useBetStyleContext()
    const { streak } = useStreakContext()
    const [recommendation, setRecommendation] = useState('Do not bet')
    // const logicalOption = useBetStyles()
    // console.log(logicalOption)

    useEffect(() => {
        if (betStyle==='Single Bet') {
            if (SingleBet(streakLength, streak.length)) {
                setRecommendation(betSize)
            }
        }
    },[streak])

  return (
    <>
        <Typography>
            Recommended bet: <br />{recommendation} 
        </Typography>
    </>
  )
}
