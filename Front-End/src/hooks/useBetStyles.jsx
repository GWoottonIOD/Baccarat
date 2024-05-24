import React, { useReducer } from 'react'
import DropDown from '../components/reuseables/DropDown';
import { numberOfPlayers, chaseLength, chaseDepth,
  chaseWidth, betSize, streakLength } from '../rules/Variables';
import { useBetStyleContext } from '../context/BetStyleContext';

export default function useBetStyles() {
  const { setStreakLength, setBetSize, setChaseLength,
    setNoOfPlayers, setChaseDepth, setChaseWidth,
    setBetStyle} = useBetStyleContext()

  const arr = [
    <DropDown name="Starting Streak" options={streakLength} setOption={setStreakLength} />,
    <DropDown name="Bet Size" options={betSize} setOption={setBetSize} />,
    <DropDown name="Chase Length" options={chaseLength} setOption={setChaseLength} />,
    <DropDown name="Number of Players" options={numberOfPlayers} setOption={setNoOfPlayers} />,
    <DropDown name="Chase Depth" options={chaseDepth} setOption={setChaseDepth} />,
    <DropDown name="Chase Width" options={chaseWidth} setOption={setChaseWidth} />,
  ]

  const initialState = null

  const singleBet = [arr[0], arr[1]]
  const singleChase = [arr[0], arr[1], arr[2]]
  const multiSingleChase = [arr[0], arr[1], arr[2], arr[3]]
  const twoWayChasing = [arr[0], arr[1], arr[2], arr[4]]
  const threeWayChasing = [arr[0], arr[1], arr[2], arr[4], arr[5]]
  const multiXWayChasing = [arr[0], arr[1], arr[2], arr[4], arr[5], arr[6]]
  const for3Against = [arr[0], arr[1], arr[2], arr[4], arr[5], arr[6]]

  const reducer = (state, action) => {
    setBetStyle(action)
    switch (action) {
      case 'Single Bet':
        return singleBet 
      case 'Single Chase':
        return singleChase
      case 'Multi Single Chase':
        return multiSingleChase
      case '2-Way Chasing':
        return twoWayChasing
      case '3-Way Chasing':
        return threeWayChasing
      case 'Multi X-Way Chasing':
        return multiXWayChasing
      case 'For 3 Against':
        return for3Against
      default:
        return state
    }
  }
  return useReducer(reducer, initialState)

}
