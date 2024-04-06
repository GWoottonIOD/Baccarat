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

export const ruleFour = (firstCard, secondCard, playersHand) => {
    const parsedResultAfterString = parseResults(firstCard, secondCard)
    if (parseInt(playersHand[2].number) !== 8 && parsedResultAfterString === 3) {
        return true
    }
}

export const ruleFive = (firstCard, secondCard, playersHand) => {
    const parsedResultAfterString = parseResults(firstCard, secondCard)
    const drawIf = [2,3,4,5,6,7]
    if (drawIf.includes(parseInt(playersHand[2].number))
        && parsedResultAfterString === 4) {
        return true
    }
}

export const ruleSix = (firstCard, secondCard, playersHand) => {
    const parsedResultAfterString = parseResults(firstCard, secondCard)
    const drawIf = [4,5,6,7]
    if (drawIf.includes(parseInt(playersHand[2].number))
        && parsedResultAfterString === 5) {
        return true
    }
}

export const ruleSeven = (firstCard, secondCard, playersHand) => {
    const parsedResultAfterString = parseResults(firstCard, secondCard)
    const drawIf = [6,7]
    if (drawIf.includes(parseInt(playersHand[2].number))
        && parsedResultAfterString === 6) {
        return true
    }
}