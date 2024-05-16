import React, { useEffect, useState } from 'react'
import { betStyle } from '../../../rules/Variables';
import DropDown from '../../DropDown';
import GridMap from '../GridMap';
import useBetStyles from '../../../hooks/useBetStyles';

export default function BetStyles() {
    const [option, setOption] = useState(null);
    const [logicalOption, dispatch] = useBetStyles()
    
    useEffect(()=>{
        dispatch(option)
    },[option])

    return (
        <>
            <DropDown name="Bet Style" options={betStyle} setOption={setOption} />
            <br />
            {logicalOption
                ? <GridMap iterations={logicalOption[0]} />
                : null}
        </>
    )
}
