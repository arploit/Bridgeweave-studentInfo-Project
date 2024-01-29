import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import Homepage from './Pages/Homepage'
import Infopage from './Pages/Infopage'

const Routespath = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/home' element={<Homepage />} />
                <Route exact path='/studentInfo/:id' element={<Infopage />} />
                <Route />
            </Routes>
        </Router>
    )
}

export default Routespath
