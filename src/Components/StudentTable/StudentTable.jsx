import React from 'react'
import './StudentTable.scss'

import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import tableHeader from './tableHeader'
import studentsData from '../../dataJson/studentsData'
import { generateRow } from './helper'

const StudentTable = ({ selectAStudent }) => {
    let rows = React.useMemo(() => {
        return studentsData?.map((item, idx) =>
            generateRow({ ...item, id: idx })
        )
    }, [studentsData])

    const onRowClick = ({ id }) => {
        selectAStudent(id)
    }

    return (
        <div className='studentTable_block'>
            <Box sx={{ height: '50%', width: 'fit-content' }}>
                <DataGrid
                    rows={rows}
                    columns={tableHeader}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                    onRowClick={(e) => onRowClick(e)}
                />
            </Box>
        </div>
    )
}

export default StudentTable
