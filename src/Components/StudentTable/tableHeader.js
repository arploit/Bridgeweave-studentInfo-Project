import { studentTableHeaders, tableWidth } from '../../utils/constant'

const tableHeader = [
    {
        field: studentTableHeaders.ID,
        headerName: 'ID',
        width: tableWidth.SM,
        sortable: true,
    },
    {
        field: studentTableHeaders.FULLNAME,
        headerName: studentTableHeaders.FULLNAME,
        type: 'string',
        width: tableWidth.BIG,
        sortable: true,
    },
    {
        field: studentTableHeaders.ENGLISH,
        headerName: studentTableHeaders.ENGLISH,
        type: 'string',
        width: tableWidth.MID,
        sortable: true,
    },

    {
        field: studentTableHeaders.HISTORY,
        headerName: studentTableHeaders.HISTORY,
        type: 'number',
        width: tableWidth.MID,
        sortable: true,
    },
    {
        field: studentTableHeaders.MATH,
        headerName: studentTableHeaders.MATH,
        type: 'number',
        width: tableWidth.MID,
        sortable: true,
    },
    {
        field: studentTableHeaders.Programming,
        headerName: studentTableHeaders.Programming,
        type: 'number',
        width: tableWidth.MID,
        sortable: true,
    },
    {
        field: studentTableHeaders.SCIENCE,
        headerName: studentTableHeaders.SCIENCE,
        type: 'number',
        width: tableWidth.MID,
        sortable: true,
    },
]

export default tableHeader

/**
 * 
 * English,
    History,
    Math,
    Programming,
    Science,
 */
