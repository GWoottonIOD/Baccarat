import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Profile from '../pages/Profile';
import PageNotAllowed from '../pages/PNA';
import StartGame from '../pages/StartGame';
import NewLogin from '../pages/NewLogin';
import PNF from '../pages/PNF';
import Theme from '../theme/Theme';
import { UserInfoEdit } from '../pages/UserInfoEdit';
import ProtectedRoute from './ProtectedRoute';
import GameHistory from '../pages/GameHistory';


export default function AppRoutes() {

    return (
        <>
            <Routes>
                {/* <Route path="/*" element={<Theme><PNF /></Theme> } /> */}
                <Route path='/startGame' element={<Theme><StartGame /></Theme>} />
                {/* <Route path='/login' element={<Theme><NewLogin /></Theme> } />
                <Route path='/startGame' element={<ProtectedRoute><Theme><StartGame /></Theme> </ProtectedRoute>} />
                <Route path='/userinfo' >
                    <Route path=':id' element={<ProtectedRoute><Theme><UserInfoEdit /></Theme></ProtectedRoute>} />
                </Route>
                <Route path='/gameHistory' element={<ProtectedRoute><Theme><GameHistory /></Theme></ProtectedRoute>} />
                <Route path='/profile' element={<ProtectedRoute><Theme><Profile /></Theme></ProtectedRoute>} /> */}
                <Route path='/pna' element={<Theme><PageNotAllowed /></Theme> } />
            </Routes>
        </>
    )
}
