import React from 'react'
import html2canvas from 'html2canvas'
import jsPdf from 'jspdf'

const Button = () => {
    const printPDF = () => {
        const domElement = document.getElementById('root')
        document.getElementById('hiddenText').style.visibility = 'visible'
        document.getElementById('hiddenText').style.position = 'static'
        html2canvas(domElement, {
            onclone: (document) => {
                document.getElementById('print').style.visibility = 'hidden'
            },
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPdf()
            pdf.addImage(imgData, 'JPEG', 10, 10)
            pdf.save(`${new Date().toISOString()}.pdf`)
            document.getElementById('hiddenText').style.visibility = 'hidden'
            document.getElementById('hiddenText').style.position = 'absolute'
        })
    }
    return (
        <button id='print' onClick={printPDF}>
            Print PDF
        </button>
    )
}

export default Button
