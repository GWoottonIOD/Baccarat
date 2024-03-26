import React from 'react'
import { CurrentUserHolder } from '../context/CurrentUserContext';
import { SecondCardHolder } from './SecondCardContext';
import { SearchHolder } from '../context/SearchContext';
import { UserContextHolder } from '../context/UserContext';
import { ThirdCardHolder } from './ThirdCardContext';
import AppRoutes from '../routes/AppRoutes';
import Navbar from '../NavBar';
import Footer from '../Footer';
import { FirstCardHolder } from './FirstCardContext';

export default function AppContext() {
    return (
      <CurrentUserHolder>
        <SecondCardHolder>
          <FirstCardHolder>
            <SearchHolder>
              <UserContextHolder>
                <ThirdCardHolder>
                    <Navbar />
                    <AppRoutes />
                    <Footer/>
                </ThirdCardHolder>
              </UserContextHolder>
            </SearchHolder>
          </FirstCardHolder>
        </SecondCardHolder>
      </CurrentUserHolder>
  )
}
