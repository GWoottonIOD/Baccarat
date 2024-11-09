import React, { useEffect, useState } from 'react';
import { useBetStyleContext } from '../context/BetStyleContext';

export default function useDiagonal() {
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
        const mediumPercentage = 1 * percentage
        const largeMediumPercentage = 1.25 * percentage
        const largestPercentage = 1.5 * percentage
        const depthTimesBet = chaseDepth * parseFloat(betSize)
        const depthTimesBetPercentage = percentage * depthTimesBet
        //each row much add to 100/chase
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
                        const conditionSmall = field === (chaseWidth + 9).toString(36).toUpperCase() && row.streakLength === chaseLength + streakLength - 1
                        console.log('chase+streak-1',chaseLength + streakLength - 1)
                        console.log(field,row.streakLength)
                        if (j <= chaseWidth / 4) {
                            if (row.streakLength === chaseLength + streakLength - 1) {
                                console.log(100*largestPercentage)
                                row.per.push(largestPercentage)
                                row[field] = chaseDepth
                                    // ? 'test'
                                    ? largestPercentage * depthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else if (row.streakLength === chaseLength + streakLength - 2) {
                                console.log(100*largeMediumPercentage)
                                row.per.push(largeMediumPercentage)
                                row[field] = chaseDepth
                                    ? largeMediumPercentage * depthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else if (row.streakLength > streakLength || field!=='A') {
                                row.per.push(smallMediumPercentage)
                                row[field] = chaseDepth
                                    ? smallMediumPercentage * depthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else if (row.streakLength === streakLength) {
                                console.log(100*smallPercentage)
                                row.per.push(smallPercentage)
                                row[field] = chaseDepth
                                ? smallPercentage * depthTimesBet + parseFloat(betSize)
                                : parseFloat(betSize);
                            }
                        }
                        else if (j <= chaseWidth / 2 && j >= chaseWidth / 4) {
                            if (row.streakLength === chaseLength + streakLength - 1) {
                                console.log(100*largestPercentage)
                                row.per.push(largestPercentage)
                                row[field] = chaseDepth
                                    ? largestPercentage * depthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else if (row.streakLength === chaseLength + streakLength - 2) {
                                console.log(100*largeMediumPercentage)
                                row.per.push(largeMediumPercentage)
                                row[field] = chaseDepth
                                    ? largeMediumPercentage * depthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else {
                                console.log(100*smallMediumPercentage)
                                row.per.push(smallMediumPercentage)
                                row[field] = chaseDepth
                                ? smallMediumPercentage * depthTimesBet + parseFloat(betSize)
                                : parseFloat(betSize);
                            }
                        }
                        else if (j <= (chaseWidth / 4) * 3 && j >= chaseWidth / 2 ) {
                            if (row.streakLength === chaseLength + streakLength - 1) {
                                console.log(100*largestPercentage)
                                row.per.push(largestPercentage)
                                row[field] = chaseDepth
                                    ? largestPercentage * depthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else if (row.streakLength === chaseLength + streakLength) {
                                console.log(100*largeMediumPercentage)
                                row.per.push(largeMediumPercentage)
                                row[field] = chaseDepth
                                    ? largeMediumPercentage * depthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else {
                                console.log(100*largeMediumPercentage)
                                row.per.push(largeMediumPercentage)
                                row[field] = chaseDepth
                                ?'test'
                                // ? largeMediumPercentage * depthTimesBet + parseFloat(betSize)
                                : parseFloat(betSize);
                            }
                        }
                        else if (j <= chaseWidth && j >= (chaseWidth / 4) * 3 ) {
                            if (conditionSmall) {
                                console.log(100*largestPercentage)
                                row.per.push(largestPercentage)
                                row[field] = chaseDepth
                                    ? smallPercentage * depthTimesBet + parseFloat(betSize)
                                    : parseFloat(betSize);
                            }
                            else {
                                console.log(100*largestPercentage)
                                row.per.push(largestPercentage)
                                row[field] = chaseDepth
                                ? largestPercentage * depthTimesBet + parseFloat(betSize)
                                : parseFloat(betSize);
                            }
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
            return accumulator + currentValue * 100
          },0);
          let sum5 = tempRows[4]?.per.reduce((accumulator, currentValue) => {
            return accumulator + currentValue * 100
          },0);
          console.log('listed',sum1, sum2, sum3, sum4, sum5)
          console.log('equals',sum1 == 100/chaseLength)
          console.log(sum1+ sum2+ sum3+ sum4+ sum5)
        setColumns(tempColumns)
        setRows(tempRows)
    }, [streakLength, betSize, chaseLength, noOfPlayers,
        chaseDepth, chaseWidth])
  return (
    [rows,columns]
  )
}
