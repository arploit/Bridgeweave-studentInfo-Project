import React from 'react'
import './StudentCard.scss'
import { useParams } from 'react-router-dom'
import studentsData from '../../dataJson/studentsData'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

import { Avatar, Button } from '@mui/material'

const StudentCard = () => {
    let { id } = useParams()

    const GradesPaper = styled(Paper)(({ theme }) => ({
        width: 400,
        height: 50,
        padding: theme.spacing(2),
        ...theme.typography.body2,
        textAlign: 'center',
    }))

    const NamePaper = styled(Paper)(({ theme }) => ({
        width: 400,
        height: 50,
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        ...theme.typography.body2,
        textAlign: 'center',
    }))

    const { name, grades, age } = studentsData[id]

    const gradesArray = Object.keys(grades)
    return (
        <div className='studentCard'>
            <Box
                sx={{
                    border: 1,
                    borderRadius: 5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 2,
                    gap: 5,
                    width: '50%',
                }}>
                <Avatar
                    alt='Remy Sharp'
                    src={`https://robohash.org/${id}.png?set=set5&size=150x150`}
                    sx={{ width: 126, height: 126, background: 'grey' }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 1,
                        gap: 1,
                    }}>
                    <NamePaper variant='elevation'>
                        <div className='name_block'>
                            <div className='nameAge_block'>
                                <h1 className='name'>{name}</h1>
                                <h3 className='age'>Age: {age}</h3>
                            </div>
                        </div>
                    </NamePaper>
                    <GradesPaper variant='elevation'>
                        <div className='grades_paper'>
                            {gradesArray.map((grade) => {
                                return (
                                    <div className='grades'>
                                        <p>{grade}</p>
                                        <p>{grades[grade]}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </GradesPaper>
                </Box>
            </Box>
            <Button variant='contained' onClick={() => console.log('hem')}>
                See Student Information
            </Button>
        </div>
    )
}

export default StudentCard
