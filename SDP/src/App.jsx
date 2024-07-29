
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './layout/Homelayout'
import Home from './pages/Web/Home'
import Login from './pages/Web/Login'
import Register from './pages/Web/Register'
import Userlayout from './layout/Userlayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminUsers from './pages/Admin/AdminUsers'
import NotFound from './pages/Web/Notfound'
import UserLayout from './layout/Userlayout'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home/>} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register/>} />
                       
                    </Route>

                    <Route element={<Userlayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                    </Route>

                    <Route element={<AdminLayout/>}>
                        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                    </Route>
                    <Route element={<UserLayout/>}>
                        <Route path='/user/dashboard' element={<UserDashboard />} />    
                    </Route>
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App