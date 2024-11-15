import React, { useEffect, useState } from 'react'
import { useStreakContext } from '../../context/StreakContext'
import { Typography } from '@mui/material'

export default function ShowStreak() {
  const { streak } = useStreakContext()
  const [streakStatus, setStreakStatus] = useState(null)

  useEffect(() => {
    let streakType = ''; // 'P' for player, 'B' for banker, 'A' for alternating
    let streakLength = 1;

    for (let i = 1; i < streak.length; i++) {
      const current = streak[i];
      const prev = streak[i - 1];
      const prevPrev = streak[i - 2];

       if (current === prev) {
        if (prevPrev) {
          if (prevPrev !== current) {
            streakLength = 2
            streakType = current;
          }
        }
        else if (current !== 'T') {
            streakType = current;
            streakLength++;
      }
      }
      else if (streakType === current) {
        streakLength++;
      } 
      else if (current === 'T' || prev === 'T') {
        console.log('Ignoring the T')
      } 
      else if (current === 'P' && prev === 'B') {
        if (prevPrev === 'B') {
          streakLength = 1
        }
        streakType = 'A';
        streakLength++;
      }
      else if (current === 'B' && prev === 'P') {
        if (prevPrev === 'P') {
          streakLength = 1
        }
        streakType = 'A';
        streakLength++;
      }
      else {

        streakLength = 1; // Reset streak length for the new streak
      }
       // Update streak type for the next iteration
    }

    if (streakType === 'P' && streakLength > 1) {
      setStreakStatus(`Player's streak ${streakLength}`)
    } else if (streakType === 'B' && streakLength > 1) {
      setStreakStatus(`Banker's streak ${streakLength}`)
    } else if (streakType === 'A' && streakLength > 1) {
      setStreakStatus(`Alternating streak ${streakLength}`)
    }else {
      setStreakStatus(`No streak`)
    }
  }, [streak])

  return (
    <>
      <Typography>
        Streak: <br />
        {streakStatus}
      </Typography>
    </>
  )
}
