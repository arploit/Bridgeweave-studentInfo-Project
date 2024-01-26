import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate()

    const onNavigate = () => {
        navigate('/info')
    }

    return (
        <div>
            Homepage
            <button onClick={onNavigate}>Navigate </button>
        </div>
    )
}

export default Homepage
