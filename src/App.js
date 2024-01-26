import React from 'react'

import Button from './GeneratePDFButton'

function App() {
    React.useEffect(() => {
        let hiddenDiv = document.getElementById('hiddenText')
        hiddenDiv.style.visibility = 'hidden'
        hiddenDiv.style.position = 'absolute'
    }, [])
    return (
        <div className='App'>
            <h1>Generate PDF</h1>
            <h2
                id='hiddenText'
                style={{
                    color: 'red',
                    position: 'static',
                    visibility: 'visible',
                }}>
                Hidden Text
            </h2>
            <p>Create a screenshot from the page, and put it in a PDF file.</p>
            <p style={{ color: 'red' }}>
                *Open this page in new window and press the button.
            </p>
            <Button />
        </div>
    )
}

export default App
