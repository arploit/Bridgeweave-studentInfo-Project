export const getAverageGrade = ({
    English,
    History,
    Math,
    Programming,
    Science,
}) => {
    return (
        ((parseInt(English) +
            parseInt(History) +
            parseInt(Math) +
            parseInt(Programming) +
            parseInt(Science)) /
            500) *
        100
    )
}

export const pieChartObject = ({ grades }, id) => {
    let subjects = Object.keys(grades)

    let subjectObject = subjects.map((subject, idx) => {
        return {
            id: idx,
            value: grades[subject],
            label: subject,
        }
    })

    return [...subjectObject]
}

export const transformDataForPieChart = (data) => {
    return data.map((item, idx) => pieChartObject(item, idx))
}

export const getMenuItems = (data) => {
    data.map((item, idx) => {
        return {
            [idx]: {
                name: item.name,
            },
        }
    })
}
