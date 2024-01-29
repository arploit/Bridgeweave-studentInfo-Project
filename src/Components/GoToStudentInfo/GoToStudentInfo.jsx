import React from 'react'
import './GoToStudent.scss'

import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const GoToStudentInfo = ({ selectedStudent }) => {
    const navigate = useNavigate()

    const onButtonClick = () => {
        console.log('selectedStudent', selectedStudent)
        navigate(`/studentInfo/${selectedStudent}`)
    }
    return (
        <Button variant='contained' onClick={onButtonClick}>
            See Student Information
        </Button>
    )
}

export default GoToStudentInfo
