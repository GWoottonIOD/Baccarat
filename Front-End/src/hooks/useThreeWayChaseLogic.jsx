import React, { useEffect, useState } from 'react';
import { useBetStyleContext } from '../context/BetStyleContext';

export default function useThreeWayChaseLogic() {
    const [columns, setColumns] = useState([])
    const [rows, setRows] = useState([])
    const { streakLength, betSize, chaseLength, noOfPlayers,
        chaseDepth, chaseWidth, betStyle } = useBetStyleContext()

    useEffect(() => {
        let weighted = true
        const chaseLengthTimesWidth = chaseLength * chaseWidth
        const percentage = 1 / chaseLengthTimesWidth
        const smallPercentage = .4 * percentage
        const smallMediumPercentage = .6 * percentage
        const mediumPercentage = .70 * percentage
        const largeMediumPercentage = .7 * percentage
        const largestPercentage = .8 * percentage
        const depthTimesBet = chaseDepth * parseFloat(betSize)
        const smallPerDepthTimesBet = smallPercentage * depthTimesBet 
        const smallMediumPerDepthTimesBet = smallMediumPercentage * depthTimesBet
        const mediumPerDepthTimesBet = mediumPercentage * depthTimesBet
        const largeMediumPerDepthTimesBet = largeMediumPercentage * depthTimesBet
        const largestPerDepthTimesBet = largestPercentage * depthTimesBet
        const depthTimesBetPercentage = percentage * depthTimesBet
        let tempColumns = [{
            field: 'streakLength',
            headerName: 'Streak Length',
            width: 160
        }]
        let tempRows = []
        for (let i = 0; i < chaseWidth; i++) {
            tempColumns.push({
                field: (i + 10).toString(36).toUpperCase(),
                headerName: (i + 10).toString(36).toUpperCase(),
                width: 80
            })
        }
        if (weighted) {
            for (let i = streakLength ? streakLength : 2; i < chaseLength + streakLength + 1; i++) {
                let row = {
                    id: i,
                    streakLength: i,
                }
                for (let j = 0; j < chaseWidth; j++) {
                        const field = (j + 10).toString(36).toUpperCase();
                        if (j <= chaseWidth / 4) {
                            if (row.streakLength === chaseLength + streakLength) {
                                row[field] = chaseDepth
                                    ? largeMediumPerDepthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else if (row.streakLength === chaseLength + streakLength - 1 ) {
                                row[field] = chaseDepth
                                    ? smallMediumPerDepthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else {row[field] = chaseDepth
                                ? smallPerDepthTimesBet + parseFloat(betSize)
                                : parseFloat(betSize);
                            }
                        }
                        else if (j <= chaseWidth / 2 && j >= chaseWidth / 4) {
                            if (row.streakLength === chaseLength + streakLength) {
                                row[field] = chaseDepth
                                    ? largeMediumPerDepthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else {row[field] = chaseDepth
                                ? smallMediumPerDepthTimesBet + parseFloat(betSize)
                                : parseFloat(betSize);
                            }
                        }
                        else if (j <= (chaseWidth / 4) * 3 && j >= chaseWidth / 2 ) {
                            if (row.streakLength === chaseLength + streakLength) {
                                row[field] = chaseDepth
                                    ? largeMediumPerDepthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else {row[field] = chaseDepth
                                ? largeMediumPerDepthTimesBet + parseFloat(betSize)
                                : parseFloat(betSize);
                            }
                        }
                        else if (j <= chaseWidth && j >= (chaseWidth / 4) * 3 ) {
                            if (row.streakLength === chaseLength + streakLength) {
                                row[field] = chaseDepth
                                    ? largestPerDepthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else {row[field] = chaseDepth
                                ? largestPerDepthTimesBet + parseFloat(betSize)
                                : parseFloat(betSize);
                            }
                        }
                        else {
                            row[field] = chaseDepth
                                ? depthTimesBetPercentage + parseFloat(betSize)
                                : parseFloat(betSize);
                        }
                }
                console.log(tempRows)
                tempRows.push(row)
            }
        }
        else {
            for (let j = 0; j < chaseWidth; j++) {
                let row = {
                    id: i,
                    streakLength: i,
                }
                const field = (j + 10).toString(36).toUpperCase();
                row[field] = chaseDepth
                    ? depthTimesBetPercentage + parseFloat(betSize)
                    : parseFloat(betSize);
                    tempRows.push(row)
            }
        }
        setColumns(tempColumns)
        setRows(tempRows)
    }, [streakLength, betSize, chaseLength, noOfPlayers,
        chaseDepth, chaseWidth])
  return (
    [rows,columns]
  )
}
