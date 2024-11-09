import { useHandContext } from '../context/HandContext'
import {
    ruleOne, ruleTwo, ruleThree, ruleFour, 
    ruleFive, ruleSix, ruleSeven
  } from '../rules/Rules';

export default function usePlayer() {
    const { hand } = useHandContext()
    const playerOnly = hand.filter((card) => card.player === 'Player')

    const player = hand.length == 0 || hand.length == 2
            ? 'Player'
            : hand.length == 1 || hand.length == 3
                ? 'Banker'
                : ruleOne(hand[0], hand[2]) && hand.length == 4
                    ? 'Player'
                    : ruleTwo(hand[1], hand[3], playerOnly) && hand.length == 4 && hand.length < 5
                        ? 'Banker'
                        : ruleThree(hand[1], hand[3]) && hand.length >= 4 && hand.length < 6
                            ? 'Banker'
                            : ruleFour(hand[1], hand[3], playerOnly) && hand.length >= 4 && hand.length < 6
                                ? 'Banker'
                                : ruleFive(hand[1], hand[3], playerOnly) && hand.length >= 4 && hand.length < 6
                                    ? 'Banker'
                                    : ruleSix(hand[1], hand[3], playerOnly) && hand.length >= 4 && hand.length < 6
                                        ? 'Banker'
                                        : ruleSeven(hand[1], hand[3], playerOnly) && hand.length >= 4 && hand.length < 6
                                            ? 'Banker'
                                            : null
  return (
    player
  )
}
