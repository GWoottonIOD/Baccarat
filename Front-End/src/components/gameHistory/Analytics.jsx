import React, { useEffect, useState } from 'react'
import { readQuery } from '../../axios/AxiosFunctions'
import { Typography, Box } from '@mui/material'

export default function Analytics() {
    const [shoeCollection, setShoeCollection] = useState([])
    const [lowestShoeLength, setLowestShoeLength] = useState(null)
    const [averageShoeLength, setAverageShoeLength] = useState(null)
    const [highestShoeLength, setHighestShoeLength] = useState(null)
    let shoeLength = null

    useEffect(() => {
        readQuery('shoes')
            .then(response => setShoeCollection(response))
            .then(() => calcLowestShoeLength())
            .then(() => calcHighestShoeLength())
            .then(() => calcAverageShoeLength())
    }, [shoeCollection])

    const calcLowestShoeLength = () => {
        shoeCollection.map((i) => {
            console.log(i.shoe.length)
            if (shoeLength === null) { shoeLength = i.shoe.length }
            else if (shoeLength >= i.shoe.length) {
                console.log('made it')
                shoeLength = i.shoe.length
            }
        })
        setLowestShoeLength(shoeLength)
    }

    const calcHighestShoeLength = () => {
        shoeCollection.map((i) => {
            console.log(i.shoe.length)
            if (shoeLength === null) { shoeLength = i.shoe.length }
            else if (shoeLength <= i.shoe.length) {
                console.log('made it')
                shoeLength = i.shoe.length
            }
        })
        setHighestShoeLength(shoeLength)
    }

    const calcAverageShoeLength = () => {
        let averageArray = shoeCollection.map((i) => i.shoe.length)
        const initialValue = 0;
        const sumWithInitial = averageArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
        );
        const sumDividedByLength = sumWithInitial / averageArray.length
        setAverageShoeLength(sumDividedByLength.toFixed())
    }

    return (
        <>
            <Typography>Analytics</Typography><br />
            <Box
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', pt: 8}}>
                <Typography>Lowest Shoe Length: {lowestShoeLength ? lowestShoeLength : null} </Typography>
                <Typography>Average Length: {averageShoeLength ? averageShoeLength : null} </Typography>
                <Typography>Highest Shoe Length: {highestShoeLength ? highestShoeLength : null}</Typography>
            </Box>
        </>
    )
}
