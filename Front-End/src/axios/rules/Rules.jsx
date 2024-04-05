export const ruleOne = (firstCard, secondCard) => {
    const parsedResult = firstCard && secondCard?parseInt(firstCard.number)+parseInt(secondCard.number):null
    // const parsedResultAfterString = parsedResult > 10? parseInt(String(parsedResult).slice(1,2)):null
    // if (secondCard && parsedResultAfterString <= 5 ) {
    //     return true
    // }
}  

export const ruleTwo = () => {
    const parsedResult = firstCard && secondCard?parseInt(firstCard.number)+parseInt(secondCard.number):null
    const parsedResultAfterString = parsedResult > 10? parseInt(String(parsedResult).slice(1,2)):null
    if (parsedResultAfterString === 10) {
        return true
    }
}

export const ruleThree = null

export const ruleFour = null

export const ruleFive = null

export const ruleSix = null

export const ruleSeven = null