import http from '../constants/http-common'


const inloggen = async (
    username,
    password) => {
    try {
        return await http.post("/auth/signup",
            username,
            password)

    } catch (error) {
       console.log(error)
    }

}
const aanmelden = async (username,
                         email,
                         birthdate,
                         password) => {
    try {
        return await http.post("/auth/signin",
            username,
            email,
            birthdate,
            password)
    } catch (error) {
        console.log(error.message);
        error.message === "Request failed with status code 500" && alert("invalid email password or username")
        error.message === "Request failed with status code 400" && alert("username or email is already in use")
    }

}

export default {
    inloggen,
    aanmelden

}