import { studentTableHeaders } from '../../utils/constant'

export const generateRow = ({ name, grades, id }) => {
    let { Math, English, Science, History, Programming } = grades

    return {
        id: id,
        [studentTableHeaders.FULLNAME]: name,
        [studentTableHeaders.ENGLISH]: English,
        [studentTableHeaders.HISTORY]: History,
        [studentTableHeaders.MATH]: Math,
        [studentTableHeaders.Programming]: Programming,
        [studentTableHeaders.SCIENCE]: Science,
    }
}
