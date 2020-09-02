import {Link} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import Nav from "../compoments/Navigation";


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
                console.log(response)
                alert("your loged in now");
                localStorage.setItem("roles", response.data.roles)
                localStorage.setItem("username", response.data.username)
                localStorage.setItem("token", response.data.accessToken)
                window.location = 'http://localhost:3000/'
            })
        } catch (error) {
            alert("username or password is incorrect")
        }
    }
    let techStack = localStorage.getItem("roles");
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
                document.getElementById('username1').value = ''
                document.getElementById('username2').value = ''
                document.getElementById('email').value = ''
                document.getElementById('date').value = ''
                document.getElementById('password').value = ''
                document.getElementById('passwordcom').value = ''
                document.getElementById('passwordin').value = ''

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
                            <h2 className="loginHeader">login</h2>
                            <div className="login firstone">username</div>
                            <input id="username2" className="text-login" type="text" value={usernameInlog}
                                   onChange={(event) => setusernameInlog(event.target.value)}/>
                            <div className="login">wachtwoord</div>
                            <input id="passwordin" className="text-login" type="password" value={passwordInlog}
                                   onChange={(event) => setpasswordInlog(event.target.value)}/><br/>
                            <button className="btn" onClick={handleInlog}>comfirm</button>
                            <br/>
                            <Link to="/vergeten?">wachtwoord vergeten?</Link>
                        </div>
                        <div className="col-1-of-2">
                            <h2 className="loginHeader">create an account</h2>
                            <div className="create">username</div>
                            <input id="username1" className="text-username" type="text" value={username}
                                   onChange={(event) => setUsername(event.target.value)}/>
                            <div className="create">email</div>
                            <input id="email" className="text-username" type="email" value={email}
                                   onChange={(event) => setemail(event.target.value)}/>
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
                            <label className="create">confirm button wil be visble if the passwords match</label>}
                            <br/>
                            {password1 == null &&
                            <label className="create">confirm button wil be visble if the password isn't empty </label>}
                            <br/>
                            <button className="btn" onClick={handleSubmit} disabled={password1 === undefined || password1 !== password}>confirm</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Loginpage;