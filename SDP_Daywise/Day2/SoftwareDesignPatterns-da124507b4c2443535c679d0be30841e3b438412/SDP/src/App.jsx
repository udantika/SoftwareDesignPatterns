
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Weblayout from './layout/Weblayout'
import Home from './pages/Web/Home'
import Login from './pages/Web/Login'
import Register from './pages/Web/Register'
import Notfound from './pages/Web/Notfound'


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Weblayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='*' element={<Notfound />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App