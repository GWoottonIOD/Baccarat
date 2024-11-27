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
                <Route index path='/' element={<Theme><StartGame /></Theme>} />
                 <Route path='/gameHistory' element={<Theme><GameHistory /></Theme>} />
                {/* <Route path='/profile' element={<ProtectedRoute><Theme><Profile /></Theme></ProtectedRoute>} /> 
                <Route path='/pna' element={<Theme><PageNotAllowed /></Theme> } /> */}
            </Routes>
        </>
    )
}
