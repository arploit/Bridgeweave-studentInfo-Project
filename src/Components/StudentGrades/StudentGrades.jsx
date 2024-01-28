import React from 'react'
import GradesPiechart from '../GradesPiechart'
import StudentDropdown from '../StudentDropdown'
import './StudentGrades.scss'

const StudentGrades = () => {
    const [currentStudentId, setCurrentStudentId] = React.useState(0)
    return (
        <div className='studentGrades_block'>
            <GradesPiechart selectedStudent={currentStudentId} />
            <StudentDropdown selectAStudent={setCurrentStudentId} />
        </div>
    )
}

export default StudentGrades
