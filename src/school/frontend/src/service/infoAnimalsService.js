import http from '../constants/http-common'


const getanimalinfo = () => {
    return http.get("/animalinfo")
}
const setanimalinfo = async (
    species,
    animal,
    info,
    picture) => {
    try {
        return await http.post("/animalinfo", {
            species,
            animal,
            info,
            picture
        })
    } catch
        (error) {
        console.error(error);
    }
}


export default {
    getanimalinfo,
    setanimalinfo
}