import React from 'react'

import StudentCard from '../StudentCard'
import GoToHome from '../GoToHome'
import PrintPDF from '../PrintPDF'

const StudentInfo = () => {
    return (
        <div>
            <StudentCard />
            <div className='studentInfo_CTA'>
                <GoToHome />
                <PrintPDF />
            </div>
        </div>
    )
}

export default StudentInfo
