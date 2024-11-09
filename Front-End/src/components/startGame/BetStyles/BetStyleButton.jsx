import React, {useState} from 'react'
import { Button } from '@mui/material/';
import DraggableDialog from './DraggableDialog';

export default function BetStyleButton() {
    const [edit, setEdit] = useState(false)

    return (
        <>
            <Button size="small" onClick={() => { setEdit(!edit) }}
                sx={{'&&:focus': {outline: 'none'}}}>Bet Style
            </Button>
            {edit  
                ? <DraggableDialog edit={edit} setEdit={setEdit} />
                : null
            }
        </>
    )
}
