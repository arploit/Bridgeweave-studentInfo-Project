import React from 'react'
import GradesPiechart from '../GradesPiechart'
import './StudentGrades.scss'
import StudentTable from '../StudentTable/StudentTable'
import GoToStudentInfo from '../GoToStudentInfo'

const StudentGrades = () => {
    const [currentStudentId, setCurrentStudentId] = React.useState(0)
    return (
        <div className='studentGrades_block'>
            <div className='PieChart_block'>
                <GradesPiechart selectedStudent={currentStudentId} />
                <GoToStudentInfo selectedStudent={currentStudentId} />
            </div>
            <StudentTable selectAStudent={setCurrentStudentId} />
        </div>
    )
}

export default StudentGrades
