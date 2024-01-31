import React from 'react'
import './PrintPDF.scss'
import { Button } from '@mui/material'
import html2canvas from 'html2canvas'
import jsPdf from 'jspdf'

const PrintPDF = () => {
    const onButtonClick = () => {
        console.log('hem')
    }

    const printPDF = () => {
        const domElement = document.getElementById('studentInfo')

        html2canvas(domElement, {
            onclone: (document) => {
                document.getElementById('printToPDF').style.visibility =
                    'hidden'
                document.getElementById('goToHomeCTA').style.visibility =
                    'hidden'
            },
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPdf()
            pdf.addImage(imgData, 'JPEG', -100, 10)
            pdf.save(`${new Date().toISOString()}.pdf`)
        })
    }
    return (
        <Button id='printToPDF' variant='contained' onClick={printPDF}>
            Print PDF
        </Button>
    )
}

export default PrintPDF
