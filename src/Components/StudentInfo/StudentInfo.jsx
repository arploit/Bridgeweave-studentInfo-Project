import React from 'react'
import './StudentInfo.scss'

import StudentCard from '../StudentCard'
import GoToHome from '../GoToHome'
import PrintPDF from '../PrintPDF'

const StudentInfo = () => {
    return (
        <div id='studentInfo' className='studentInfo_block'>
            <StudentCard />
            <div className='studentInfo_CTA'>
                <GoToHome />
                <PrintPDF />
            </div>
        </div>
    )
}

export default StudentInfo
