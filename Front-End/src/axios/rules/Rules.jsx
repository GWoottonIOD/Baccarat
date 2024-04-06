export const parseResults = (firstCard, secondCard, thirdCard) => {
    const parsedResult = thirdCard
        ? firstCard?.number + secondCard?.number + thirdCard?.number
        : firstCard?.number + secondCard?.number
    const parsedResultAfterString = parsedResult > 10? parseInt(String(parsedResult).slice(1,2)):parsedResult
    return parsedResultAfterString
}

export const ruleOne = (firstCard, secondCard) => {
    const parsedResultAfterString = parseResults(firstCard, secondCard)
    if (secondCard && parsedResultAfterString <= 5 ) {
        return true
    }
}  

export const ruleTwo = (firstCard, secondCard, playersHand) => {
    const parsedResultAfterString = parseResults(firstCard, secondCard)
    if (playersHand?.length === 2 && parsedResultAfterString <= 5) {
        return true
    }
}

export const ruleThree = (firstCard, secondCard) => {
    const parsedResultAfterString = parseResults(firstCard, secondCard)
    if (parsedResultAfterString <= 2) {
        return true
    }
}

export const ruleFour = (firstCard, secondCard, playersHand) => {
    const parsedResultAfterString = parseResults(firstCard, secondCard)
    if (parseInt(playersHand[2]?.number) !== 8 && parsedResultAfterString === 3) {
        return true
    }
}

export const ruleFive = (firstCard, secondCard, playersHand) => {
    const parsedResultAfterString = parseResults(firstCard, secondCard)
    const drawIf = [2,3,4,5,6,7]
    if (drawIf.includes(parseInt(playersHand[2]?.number))
        && parsedResultAfterString === 4) {
        return true
    }
}

export const ruleSix = (firstCard, secondCard, playersHand) => {
    const parsedResultAfterString = parseResults(firstCard, secondCard)
    const drawIf = [4,5,6,7]
    if (drawIf.includes(parseInt(playersHand[2]?.number))
        && parsedResultAfterString === 5) {
        return true
    }
}

export const ruleSeven = (firstCard, secondCard, playersHand) => {
    const parsedResultAfterString = parseResults(firstCard, secondCard)
    const drawIf = [6,7]
    if (drawIf.includes(parseInt(playersHand[2]?.number))
        && parsedResultAfterString === 6) {
        return true
    }
}

export const cards = [
    {id: 1, name: '1', value: 10}, {id: 2, name: '2', value: 10}, {id: 3, name: '3', value: 10},
    {id: 3, name: '4', value: 10}, {id: 5, name: '5', value: 10}, {id: 6, name: '6', value: 10},
    {id: 7, name: '7', value: 10}, {id: 8, name: '8', value: 10}, {id: 9, name: '9', value: 10},
    {id: 10, name: '10', value: 10}, {id: 11, name: 'Jack', value: 10}, {id: 12, name: 'Qu, value: 10een'},
    {id: 13, name: 'King', value: 10}
  ]

export const suits = [
    {id: 1, name: 'Hearts'}, {id: 2, name: 'Clubs'},
    {id: 3, name: 'Spades'}, {id: 4, name: 'Diamonds'}
  ]