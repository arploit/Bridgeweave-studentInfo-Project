import React from 'react'

import Routespath from './Routespath'
import Appcontext from './Appcontext'
import studentsData from './dataJson/studentsData'

function App() {
    return (
        <Appcontext.Provider value={studentsData}>
            <Routespath />
        </Appcontext.Provider>
    )
}

export default App
