import React, {useState, useEffect} from 'react'
import { Typography } from '@mui/material';
import { parseResults } from '../../rules/Rules';
import { useHandContext } from '../../context/HandContext';

export default function Results() {
    const { hand } = useHandContext()
    const playerOnly = hand.filter((card) => card.player === 'Player')
    const bankerOnly = hand.filter((card) => card.player === 'Banker')
    const [result, setResult] = useState({
        player: 0,
        banker: 0
    });

    const calcPlayer = parseResults(playerOnly[0], playerOnly[1], playerOnly[2]? playerOnly[2] : null)
    const calcBanker = parseResults(bankerOnly[0], bankerOnly[1], bankerOnly[2]? bankerOnly[2] : null)

    useEffect(() => {
        setResult({
            player: calcPlayer,
            banker: calcBanker
        });
    }, [hand]);

  return (
    <>
        <Typography>
            Results: <br />
            Player: {result?.player}<br />
            Banker: {result?.banker}<br />
            {result?.player > result?.banker ? ' Player Wins' : ' Banker Wins'}
        </Typography>
    </>
  )
}
