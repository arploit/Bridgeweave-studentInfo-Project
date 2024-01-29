import React from 'react'
import './Home.scss'
import StudentGrades from '../StudentGrades'
import StudentTable from '../StudentTable/StudentTable'

const Home = () => {
    return (
        <div className='home'>
            <StudentGrades />
        </div>
    )
}

export default Home
