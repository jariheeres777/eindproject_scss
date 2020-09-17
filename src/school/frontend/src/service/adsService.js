import http from '../constants/http-common'

const getads = () => {
    return http.get("/advertisement")
}

export default {
    getads,
}