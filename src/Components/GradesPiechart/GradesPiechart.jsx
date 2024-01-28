import React, { useContext } from 'react'
import { PieChart } from '@mui/x-charts/PieChart'
import Appcontext from '../../Appcontext'
import { transformDataForPieChart } from '../../utils/helper'

const GradesPiechart = ({ selectedStudent }) => {
    const studentsData = useContext(Appcontext)
    let PieChartData = React.useMemo(
        () => transformDataForPieChart(studentsData),
        [studentsData]
    )

    const getGrades = (id) => {
        return PieChartData[id]
    }

    return (
        <div>
            <PieChart
                series={[
                    {
                        data: getGrades(selectedStudent),
                    },
                ]}
                width={400}
                height={200}
            />
            {/* //ToDo:: Show Average Marks here */}
        </div>
    )
}

export default GradesPiechart
