import React from 'react'
import { CurrentUserHolder } from '../context/CurrentUserContext';
import { BankerHandHolder } from './BankerHandContext';
import { SearchHolder } from '../context/SearchContext';
import { UserContextHolder } from '../context/UserContext';
import AppRoutes from '../routes/AppRoutes';
import Navbar from '../NavBar';
import Footer from '../Footer';
import { PlayerHandHolder } from './PlayerHandContext';
import { HandHolder } from './HandContext';

export default function AppContext() {
    return (
      <CurrentUserHolder>
        <PlayerHandHolder>
          <BankerHandHolder>
            <HandHolder>
              <SearchHolder>
                <UserContextHolder>
                  <Navbar />
                  <AppRoutes />
                  <Footer/>
                </UserContextHolder>
              </SearchHolder>
            </HandHolder>
          </BankerHandHolder>
        </PlayerHandHolder>
      </CurrentUserHolder>
  )
}
