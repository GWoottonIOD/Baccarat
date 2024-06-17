import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useEndBottom from '../../hooks/useEndBottom';
import useDiagonal from '../../hooks/useDiagonal';

export default function BettingTable() {
    const chaseLogic = useEndBottom()
    // const chaseLogic = useDiagonal()
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={chaseLogic?.[0]}
                columns={chaseLogic?.[1]}
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
