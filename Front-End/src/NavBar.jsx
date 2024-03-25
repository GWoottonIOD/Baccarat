import { React, useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { PageTypeContext } from './context/PageTypeContext';
import { useCurrentUserContext } from './context/CurrentUserContext';

const Navbar = () => {
  const { currentUser } = useCurrentUserContext()
  const {pageType} = useContext(PageTypeContext)
  const location = useLocation();
  const gameHistory = <NavLink id="link" to='/gameHistory' exact="true" forcerefresh="true">Game History</NavLink>
  const startGame = <NavLink id="link" to='/startGame' exact="true" forcerefresh="true">Start Game</NavLink>

  const pathname = location.pathname
  
  return (
    <>
      <AppBar position="sticky" className='AppBar' sx={{ backgroundColor: '#4A8E51' }}>
        <Toolbar id="tool">
          <Typography variant="h6" color="inherit" noWrap id="toolItems">
            {/* {currentUser.username && currentUser.UserAdmin && pathname !== '/gameHistory' ?  */}
            {gameHistory}
             {/* : null} */}
            {/* {currentUser.username && pathname !== '/startGame' ? */}
             {startGame} 
             {/* : null} */}
            {pathname == '/profile' || pathname == '/login'? null : <>{currentUser.username?<NavLink id="link" to='/profile'>{currentUser.username}</NavLink>: null}</> }
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar