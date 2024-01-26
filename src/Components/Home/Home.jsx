import React, { useContext } from 'react'
import Appcontext from '../../Appcontext'

const Home = () => {
    let studentsData = useContext(Appcontext)

    console.log('studentsData', studentsData)
    return <div className='home'>{studentsData[0].name}</div>
}

export default Home
