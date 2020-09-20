import http from '../constants/http-common'

const getads = () => {
    return http.get("/advertisement")
}
const setads = async (
    adtext,
    pricead,
    adPictures,
    adname,
    infofromid,
    usernamebyid) => {
    try {
        return await http.post("/advertisement", {
            adtext,
            pricead,
            adPictures,
            adname,
            infofromid,
            usernamebyid
        })
    } catch
        (error) {
        console.error(error);
    }
}

export default {
    getads,
    setads
}