import http from '../constants/http-common'

const getbid = () => {
    return http.get("/biedingen")
}
const deletebid =()=>{
    return http("/biedingen/")
}

export default {
    getbid,
    deletebid,

}