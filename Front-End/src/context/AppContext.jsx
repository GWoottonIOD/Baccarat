import React from 'react'
import { CurrentUserHolder } from '../context/CurrentUserContext';
import { StreakHolder } from './StreakContext';
import { SearchHolder } from '../context/SearchContext';
import { UserContextHolder } from '../context/UserContext';
import { BetStyleHolder } from './BetStyleContext';
import { HandHolder } from './HandContext';

export default function AppContext(props) {
  return (
    <CurrentUserHolder>
      <BetStyleHolder>
        <StreakHolder>
          <HandHolder>
            <SearchHolder>
              <UserContextHolder>
                {props.children}
              </UserContextHolder>
            </SearchHolder>
          </HandHolder>
        </StreakHolder>
      </BetStyleHolder>
    </CurrentUserHolder>
  )
}
