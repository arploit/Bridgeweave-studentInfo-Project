import { createContext } from 'react'
import studentsData from '../dataJson/studentsData'

let Appcontext = createContext(studentsData)

export default Appcontext
