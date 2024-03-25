import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from '../pages/Users';
import Profile from '../pages/Profile';
import PageNotAllowed from '../pages/PNA';
import StartGame from '../pages/StartGame';
import NewLogin from '../pages/NewLogin';
import PNF from '../pages/PNF';
import Theme from '../theme/Theme';
import { UserInfoEdit } from '../pages/UserInfoEdit';
import ProtectedRoute from './ProtectedRoute';
import { NewUser } from '../pages/UserNew';
import GameHistory from '../pages/GameHistory';


export default function AppRoutes() {

    return (
        <>
            <Routes>
                <Route path="/*" element={<Theme component={<PNF />} />}/>
                <Route path='/login' element={<Theme component={<NewLogin />} />} />
                <Route path='/startGame' element={<ProtectedRoute><Theme component={<StartGame />} /></ProtectedRoute>} />
                <Route path='/users' element={<ProtectedRoute><Theme component={<Users />} /></ProtectedRoute>} />
                <Route path='/newuser' element={<ProtectedRoute><Theme component={<NewUser />} /></ProtectedRoute>} />
                <Route path='/userinfo' >
                    <Route path=':id' element={<ProtectedRoute><Theme component={<UserInfoEdit />} /></ProtectedRoute>} />
                </Route>
                <Route path='/gameHistory' element={<ProtectedRoute><Theme component={<GameHistory />} /></ProtectedRoute>} />
                <Route path='/profile' element={<ProtectedRoute><Theme component={<Profile />} /></ProtectedRoute>} />
                <Route path='/pna' element={<Theme component={<PageNotAllowed />} />} />
            </Routes>
        </>
    )
}
