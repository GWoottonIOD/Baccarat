import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useBetStyleContext } from '../../context/BetStyleContext';

export default function BettingTable() {
    const [columns, setColumns] = useState([])
    const [rows, setRows] = useState([])
    const { streakLength, betSize, chaseLength, noOfPlayers,
        chaseDepth, chaseWidth, betStyle } = useBetStyleContext()

    useEffect(() => {
        let weighted = true
        const chaseLengthPlusOne = chaseLength + 1
        const chaseLengthTimesWidth = chaseLengthPlusOne * chaseWidth
        const weightedWidth = (1 / chaseWidth) + 1
        const weightedLength = (1 / chaseLength) + 1
        const weightedWidthMedium = (.85 / chaseWidth) + 1
        const weightedLengthMedium = (.85 / chaseLength) + 1
        const weightedWidthSmall = (.70 / chaseWidth) + 1
        const weightedLengthSmall = (.70 / chaseLength) + 1
        const weightedWidthTimesBetSize = weightedWidth * parseFloat(betSize)
        const weightedLengthTimesBetSize = weightedLength * parseFloat(betSize)
        const weightedWidthMediumTimesBetSize = weightedWidthMedium * parseFloat(betSize)
        const weightedLengthMediumTimesBetSize = weightedLengthMedium * parseFloat(betSize)
        const weightedWidthSmallTimesBetSize = weightedWidthSmall * parseFloat(betSize)
        const weightedLengthSmallTimesBetSize = weightedLengthSmall * parseFloat(betSize)
        // console.log('wightedWidth', weightedWidthTimesBetSize, 'weightedLength', weightedLengthTimesBetSize)
        // console.log('wightedWidthMedium', weightedWidthMediumTimesBetSize, 'weightedLengthMedium', weightedLengthMediumTimesBetSize)
        // console.log('wightedWidthSmall', weightedWidthSmallTimesBetSize, 'weightedLengthSmall', weightedLengthSmallTimesBetSize)
        const percentage = 1 / chaseLengthTimesWidth
        const depthTimesBet = chaseDepth * parseFloat(betSize)
        const depthTimesBetPercentage = depthTimesBet * percentage
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
                        if (j <= chaseWidth / chaseWidth) {
                            if (row.streakLength === chaseLength + streakLength) {
                                row[field] = chaseDepth
                                    ? depthTimesBetPercentage + weightedLengthTimesBetSize
                                    : parseFloat(betSize);
                            }
                            else if (row.streakLength === chaseLength + streakLength - 1 ) {
                                row[field] = chaseDepth
                                    ? depthTimesBetPercentage + weightedLengthMediumTimesBetSize
                                    : parseFloat(betSize);
                            }
                            else {row[field] = chaseDepth
                                ? depthTimesBetPercentage + weightedLengthSmallTimesBetSize
                                : parseFloat(betSize);
                            }
                        }
                        else if (j <= chaseWidth / chaseWidth * 2 && j >= chaseWidth / chaseWidth) {
                            if (row.streakLength === chaseLength + streakLength) {
                                row[field] = chaseDepth
                                    ? depthTimesBetPercentage + weightedLengthTimesBetSize
                                    : parseFloat(betSize);
                            }
                            else {row[field] = chaseDepth
                                ? depthTimesBetPercentage + weightedLengthMediumTimesBetSize
                                : parseFloat(betSize);
                            }
                        }
                        else if (j <= chaseWidth && j >= chaseWidth / chaseWidth * 2) {
                            if (row.streakLength === chaseLength + streakLength) {
                                row[field] = chaseDepth
                                    ? depthTimesBetPercentage + weightedLengthTimesBetSize
                                    : parseFloat(betSize);
                            }
                            else {row[field] = chaseDepth
                                ? depthTimesBetPercentage + weightedLengthTimesBetSize
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
            for (let i = streakLength ? streakLength : 2; i < chaseLength + streakLength + 1; i++) {
                let row = {
                    id: i,
                    streakLength: i,
                }
            }

            for (let j = 0; j < chaseWidth; j++) {
                const field = (j + 10).toString(36).toUpperCase();
                row[field] = chaseDepth
                    ? depthTimesBetPercentage + parseFloat(betSize)
                    : parseFloat(betSize);
            }

            tempRows.push(row)
        }
        setColumns(tempColumns)
        setRows(tempRows)
    }, [streakLength, betSize, chaseLength, noOfPlayers,
        chaseDepth, chaseWidth])
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}
