import React, { useReducer, useState } from 'react'
import DropDown from '../components/DropDown';
import {
  betSize, chaseDepth, chaseLength, chaseWidth,
  numberOfPlayers, streakLength
} from '../rules/Variables';

export default function useBetStyles() {
  const [option, setOption] = useState(null);

  const initialState = null

  const arr = [
    <DropDown name="Streak Length" options={streakLength} setOption={setOption} />,
    <DropDown name="Bet Size" options={betSize} setOption={setOption} />,
    <DropDown name="Chase Length" options={chaseLength} setOption={setOption} />,
    <DropDown name="Number of Players" options={numberOfPlayers} setOption={setOption} />,
    <DropDown name="Chase Depth" options={chaseDepth} setOption={setOption} />,
    <DropDown name="Chase Width" options={chaseWidth} setOption={setOption} />,
  ]

  const singleBet = [arr[0], arr[1]]
  const singleChase = [arr[0], arr[1], arr[2]]
  const multiSingleChase = [arr[0], arr[1], arr[2], arr[3]]
  const twoWayChasing = [arr[0], arr[1], arr[2], arr[4]]
  const threeWayChasing = [arr[0], arr[1], arr[2], arr[4], arr[5]]
  const multiXWayChasing = [arr[0], arr[1], arr[2], arr[4], arr[5], arr[6]]
  const for3Against = [arr[0], arr[1], arr[2], arr[4], arr[5], arr[6]]

  const reducer = (state, action) => {
    console.log(action)
    switch (action) {
      case 'Single Bet':
        return [singleBet, option] 
      case 'Single Chase':
        return [singleChase, option]
      case 'Multi Single Chase':
        return [multiSingleChase, option]
      case '2-Way Chasing':
        return [twoWayChasing, option]
      case '3-Way Chasing':
        return [threeWayChasing, option]
      case 'Multi X-Way Chasing':
        return [multiXWayChasing, option]
      case 'For 3 Against':
        return [for3Against, option]
      default:
        return state
    }
  }
  return useReducer(reducer, initialState)

}
