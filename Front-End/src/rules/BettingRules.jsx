export const SingleBet = (chosenStreak, currentStreak) => {
    console.log(parseInt(chosenStreak), currentStreak)
    if (currentStreak === parseInt(chosenStreak)) {
        return true
    }
}