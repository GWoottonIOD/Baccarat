import React, { useEffect, useState } from 'react';
import { useBetStyleContext } from '../context/BetStyleContext';

export default function useEndBottom() {
    const [columns, setColumns] = useState([])
    const [rows, setRows] = useState([])
    const { streakLength, betSize, chaseLength, noOfPlayers,
        chaseDepth, chaseWidth, betStyle } = useBetStyleContext()

    useEffect(() => {
        let weighted = true
        const chaseLengthTimesWidth = chaseLength * chaseWidth
        const percentage = 1 / chaseLengthTimesWidth
        const smallPercentage = .5 * percentage
        const smallMediumPercentage = .75 * percentage
        const mediumPercentage = .70 * percentage
        const largeMediumPercentage = 1.01 * percentage
        const largestPercentage = 1.27 * percentage
        const depthTimesBet = chaseDepth * parseFloat(betSize)
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
            for (let i = streakLength ? streakLength : 2; i < chaseLength + streakLength; i++) {
                let row = {
                    id: i,
                    streakLength: i,
                    per: []
                }
                for (let j = 0; j < chaseWidth; j++) {
                        const field = (j + 10).toString(36).toUpperCase();
                        console.log(field,row.streakLength)
                            if (field === (chaseWidth + 9).toString(36).toUpperCase() || row.streakLength === chaseLength + streakLength - 1) {
                                console.log(100*largestPercentage)
                                row.per.push(largestPercentage)
                                row[field] = chaseDepth
                                    ? largestPercentage * depthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else if (field === (chaseWidth + 8).toString(36).toUpperCase() || row.streakLength === chaseLength + streakLength - 2) {
                                console.log(100*largeMediumPercentage)
                                row.per.push(largeMediumPercentage)
                                row[field] = chaseDepth
                                    ? largeMediumPercentage * depthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else if (field === (chaseWidth + 7).toString(36).toUpperCase() || row.streakLength === chaseLength + streakLength - 3 
                                || field === (chaseWidth + 6).toString(36).toUpperCase() || row.streakLength === chaseLength + streakLength - 4) {
                                row.per.push(smallMediumPercentage)
                                row[field] = chaseDepth
                                    ? smallMediumPercentage * depthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else if (field === (chaseWidth + 5).toString(36).toUpperCase() || row.streakLength === streakLength) {
                                row.per.push(smallPercentage)
                                row[field] = chaseDepth
                                ? smallPercentage * depthTimesBet + parseFloat(betSize)
                                : parseFloat(betSize);
                            }
                        else {
                            console.log('nothing hopefully')
                            row[field] = chaseDepth
                                ? depthTimesBetPercentage + parseFloat(betSize)
                                : parseFloat(betSize);
                        }
                }
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
        console.log(tempRows[3]?.per)
        console.log(tempRows[4]?.per)
        let sum1 = tempRows[0]?.per.reduce((accumulator, currentValue) => {
            return accumulator + currentValue * 100
          },0);
          let sum2 = tempRows[1]?.per.reduce((accumulator, currentValue) => {
            return accumulator + currentValue * 100
          },0);
          let sum3 = tempRows[2]?.per.reduce((accumulator, currentValue) => {
            return accumulator + currentValue * 100
          },0);
          let sum4 = tempRows[3]?.per.reduce((accumulator, currentValue) => {
            console.log(accumulator)
            console.log(currentValue*100)
            return accumulator + currentValue * 100
          },0);
          let sum5 = tempRows[4]?.per.reduce((accumulator, currentValue) => {
            return accumulator + currentValue * 100
          },0);
          console.log(sum1, sum2, sum3, sum4, sum5)
          console.log(sum1+ sum2+ sum3+ sum4+ sum5)
        setColumns(tempColumns)
        setRows(tempRows)
    }, [streakLength, betSize, chaseLength, noOfPlayers,
        chaseDepth, chaseWidth])
  return (
    [rows,columns]
  )
}
