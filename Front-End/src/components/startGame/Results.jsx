import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material';
import { parseResults } from '../../rules/Rules';
import { useHandContext } from '../../context/HandContext';
import AddToStreak from './AddToStreak';
import usePlayer from '../../hooks/usePlayer';

export default function Results() {
    const { hand } = useHandContext()
    const player = usePlayer()

    const playerOnly = hand.filter((card) => card.player === 'Player')
    const bankerOnly = hand.filter((card) => card.player === 'Banker')

    const [result, setResult] = useState({
        player: 0,
        banker: 0
    });

    const winner = hand.length >= 4
    ? result.player === result.banker
        ? 'Tied'
        : result.player > result.banker
            ? 'Player Wins'
            : 'Banker Wins'
    : null

    const calcPlayer = parseResults(playerOnly[0], playerOnly[1], playerOnly[2] ? playerOnly[2] : null)
    const calcBanker = parseResults(bankerOnly[0], bankerOnly[1], bankerOnly[2] ? bankerOnly[2] : null)

    useEffect(() => {
        hand.length >= 4
            ? setResult({
                player: calcPlayer,
                banker: calcBanker
            })
            : setResult({
                player: 0,
                banker: 0
            })
    }, [hand]);

    return (
        <>
            <Typography>
                Results: <br />
                Player: {result.player}<br />
                Banker: {result.banker}<br />
                {hand.length >= 4
                    ? result.player === result.banker
                        ? 'Tied'
                        : result.player > result.banker
                            ? 'Player Wins'
                            : 'Banker Wins'
                    : null
                }
            </Typography>
            {player
                ? null
                : <AddToStreak result={winner.slice(0,1)} />
            }
        </>
    )
}
