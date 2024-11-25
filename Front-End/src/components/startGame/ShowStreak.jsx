import React, { useEffect, useState } from 'react'
import { useStreakContext } from '../../context/StreakContext'
import { Typography } from '@mui/material'
import { useCurrentStreakContext } from '../../context/CurrentStreakContext'

export default function ShowStreak() {
  const { streak } = useStreakContext()
  const { setCurrentStreak } = useCurrentStreakContext()
  const [streakStatus, setStreakStatus] = useState(`No streak`)
  let streakLength = 1
  let streakType;

  const streakLogic = (current) => {
    console.log('streakType', streakType)
    console.log('is streakType current?',  streakType === current)
    streakLength = streakType === current ? streakLength + 1 : 2
    streakType = current;

    if (streakType === 'P') {
      setStreakStatus(`Player's streak ${streakLength}`)
      setCurrentStreak({streak: 'Player', length: streakLength})
    } else if (streakType === 'B') {
      setStreakStatus(`Banker's streak ${streakLength}`)
      setCurrentStreak({streak: 'Banker', length: streakLength})
    } else if (streakType === 'A') {
      setStreakStatus(`Alternating streak ${streakLength}`)
      setCurrentStreak({streak: 'Alternating', length: streakLength})
    } else if (streakType === 'N') {
      setStreakStatus(`No streak`)
      setCurrentStreak({streak: 'None', length: 1})
      streakLength = 1
    }
  }

  useEffect(() => {
    const removeT = streak.filter((i)=> i !== 'T')

    for (let i = 1; i < streak.length; i++) {
      const latest = streak[i];
      const current = removeT[i];
      const prev = removeT[i - 1];

      console.log('Before removed T:', removeT)

      if (current === prev) {
        if (streakType === 'A') {
          streakLength = 1
          streakLogic(current)
        }
        else streakLogic(current)
      }
      else if (current === 'P' && prev === 'B') {
        streakLogic('A')
      }
      else if (current === 'B' && prev === 'P') {
        streakLogic('A')
      }
      else if (latest === 'T') {
        streakType = current;
      }
      else if (current !== prev) {
        streakLength = 1
        streakLogic(current)
      }
      // Update streak type for the next iteration
      else if (current) {
        streakLogic(current)
      }
    }

  }, [streak])

  return (
    <>
      <Typography>
        Streak: <br />
        {streakStatus}
        {/* {currentStreak.streak} streak {currentStreak.length} */}
      </Typography>
    </>
  )
}
