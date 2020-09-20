import React, {useState} from "react";
import axios from "axios";
import Nav from "../compoments/Navigation";
import inlogService from "../service/inlogService";


const Loginpage = () => {
    const [usernameInlog, setusernameInlog] = useState()
    const [passwordInlog, setpasswordInlog] = useState()
    const handleInlog = async (event) => {
        event.preventDefault() // om te voorkomen dat de pagina ververst
        try {
            const result = await axios.post('http://localhost:8080/api/auth/signin', {
                username: usernameInlog,
                password: passwordInlog
            }).then(function (response) {
                alert("your loged in now");
                localStorage.setItem('ID', response.data.id)
                localStorage.setItem("roles", response.data.roles)
                localStorage.setItem("username", response.data.username)
                localStorage.setItem("token", response.data.accessToken)
                localStorage.setItem("email", response.data.email)
                window.location = 'http://localhost:3000/'
            })
        } catch (error) {
            alert("username or password is incorrect")
        }
    }
    const [username, setUsername] = useState();
    const [email, setemail] = useState();
    const [birthdate, setbirthdate] = useState()
    const [password, setpassword] = useState()
    const [password1, setpassword1] = useState()
    const handleSubmit = async (event) => {
        event.preventDefault() // om te voorkomen dat de pagina ververst
        try {
            const result = await axios.post('api/auth/signup', {
                username: username,
                email: email,
                birthdate: birthdate,
                password: password
            }).then(function (response) {
                alert("account is aan gemaakt");
                setUsername(null)
                setemail(null)
                setbirthdate(null)
                setpassword(null)
                setpassword1(null)
                setusernameInlog(null)
                setpasswordInlog(null)

            })
        } catch (error) {
            console.log(error.message);
            error.message === "Request failed with status code 500" && alert("username or email are already in use")

        }
    }


    return (
        <>
            <Nav/>
            <div className="achtergrondkleur">
                <div className="popup_content ">
                    <div className="row">
                        <div className="col-1-of-2">
                            <h1 className="loginHeader">login</h1>
                            <div className="login firstone">username</div>
                            <input id="usernameinlog" className="text-login" type="text" value={usernameInlog}
                                   onChange={(event) => setusernameInlog(event.target.value)}/>
                            <div className="login">wachtwoord</div>
                            <input id="passwordin" className="text-login" type="password" value={passwordInlog}
                                   onChange={(event) => setpasswordInlog(event.target.value)}/><br/>
                            <button className="btn" onClick={handleInlog}>comfirm</button>
                            <br/>
                            {/*<Link to="/vergeten?">wachtwoord vergeten?</Link>*/}
                        </div>
                        <div className="col-1-of-2">
                            <h1 className="loginHeader">create an account</h1>

                            <div className="create">username</div>
                            <input id="username1" className="text-username" type="text" value={username}
                                   onChange={(event) => setUsername(event.target.value)}/>
                            <br/>
                            {username === undefined &&
                            <label className=" color-red">*username can't be empty</label>}
                            <div className="create">email</div>
                            <input id="email" className="text-username" type="email" value={email}
                                   onChange={(event) => setemail(event.target.value)}/>
                            <br/>
                            {email === undefined &&
                            <label className=" color-red">*email can't be empty</label>}
                            <div className="create">date of birth</div>
                            <input id="date" className="text-username" type="date" value={birthdate}
                                   onChange={(event) => setbirthdate(event.target.value)}/>
                            <div className="create">password</div>
                            <input id="password" className="text-username" type="password" value={password1}
                                   onChange={(event) => setpassword1(event.target.value)}/>
                            <div className="create">confirm password</div>
                            <input id="passwordcom" className="text-username" type="password" value={password}
                                   onChange={(event) => setpassword(event.target.value)}/>
                            <br/>
                            {password1 !== password &&
                            <label className=" color-red">*confirm button wil be visble if the passwords
                                match</label>}
                            <br/>
                            {password1 == null &&
                            <label className=" color-red">*confirm button wil be visble if the password isn't
                                empty </label>}
                            <br/>
                            {password >= 40 &&
                            <label className=" color-red">*password is too long maximum 40 sybols </label>}
                            <br/>
                            <button className="btn" onClick={handleSubmit}
                                    disabled={password1 === undefined || password >= 40 || password1 !== password || email === undefined || username === undefined}>confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Loginpage;