import React from 'react'
import './GoToHome.scss'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const GoToHome = () => {
    let navigate = useNavigate()

    const onButtonClick = () => {
        navigate('/home')
    }
    return (
        <Button id='goToHomeCTA' variant='contained' onClick={onButtonClick}>
            Go To Home
        </Button>
    )
}

export default GoToHome
