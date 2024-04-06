import React, {useState, useEffect} from 'react'
import { usePlayerHandContext } from '../../context/PlayerHandContext';
import { useBankerHandContext } from '../../context/BankerHandContext';
import { Typography } from '@mui/material';
import { parseResults } from '../../axios/rules/Rules';

export default function Results() {
    const { playersHand } = usePlayerHandContext()
    const { bankersHand } = useBankerHandContext()
    const [result, setResult] = useState({
        player: 0,
        banker: 0
    });

    useEffect(() => {
        if (playersHand[1] !== null || bankersHand[1] !== null) {
            setResult({
                player: parseResults(playersHand[0], playersHand[1], playersHand[2]),
                banker: parseResults(bankersHand[0], bankersHand[1], bankersHand[2])
            });
        }
    }, [playersHand, bankersHand]);

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
