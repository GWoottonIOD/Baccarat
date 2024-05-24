import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useBetStyleContext } from '../../context/BetStyleContext';

export default function BettingTable() {
    const [columns, setColumns] = useState([])
    const [rows, setRows] = useState([])
    const { streakLength, betSize, chaseLength, noOfPlayers,
        chaseDepth, chaseWidth, betStyle} = useBetStyleContext()

    useEffect(() => {
        const chaseTimesWidth = chaseLength * chaseWidth
        const percentage = chaseTimesWidth / 100
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
        for (let i = streakLength? streakLength : 2; i < chaseLength + streakLength + 1; i++) {
            let row = {
                id: i,
                streakLength: i,
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
