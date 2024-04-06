const parseResults = (firstCard, secondCard) => {
    const parsedResult = firstCard && secondCard?parseInt(firstCard.number)+parseInt(secondCard.number):null
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

export const ruleFour = null

export const ruleFive = null

export const ruleSix = null

export const ruleSeven = null