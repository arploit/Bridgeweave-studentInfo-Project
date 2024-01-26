import React from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../../components/Home'

const Homepage = () => {
    const navigate = useNavigate()

    const onNavigate = () => {
        navigate('/info')
    }

    return (
        <div>
            <Home />
            <button onClick={onNavigate}>Navigate </button>
        </div>
    )
}

export default Homepage
