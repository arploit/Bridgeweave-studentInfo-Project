import React from 'react'
import { useParams } from 'react-router-dom'
import studentsData from '../../dataJson/studentsData'
import Avatar from '@mui/material/Avatar'

const StudentInfo = () => {
    let { id } = useParams()

    console.log('studentsData', studentsData[id])
    return (
        <div>
            <Avatar
                alt='Remy Sharp'
                src={`https://robohash.org/${id}.png?set=set5&size=150x150`}
                sx={{ width: 126, height: 126 }}
            />
        </div>
    )
}

export default StudentInfo
