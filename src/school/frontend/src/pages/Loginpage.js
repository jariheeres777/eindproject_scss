import {Link} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";


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
                sessionStorage.setItem("roles", response.data.roles)
                sessionStorage.setItem("username", response.data.username)
                sessionStorage.setItem("token", response.data.accessToken)
                window.location= 'http://localhost:3000/'
            })
        } catch (error) {
           alert("username and password is incorrect")
        }
    }
    const [username, setUsername] = useState();
    const [email, setemail] = useState();
    const [birthdate, setbirthdate] = useState()
    const [password, setpassword] = useState()
    const handleSubmit = async (event) => {
        event.preventDefault() // om te voorkomen dat de pagina ververst
        try {
            const result = await axios.post('http://localhost:8080/api/auth/signup', {
                username: username,
                email: email,
                birthdate: birthdate,
                password: password
            }).then(function (response) {
                alert("accont is aan gemaakt" );

            })
        } catch (error) {
            console.error(error);
            alert("gegevens zijn niet goed ingevuld, gebruikersnaam of email bestaan al");
        }
    }


    return (
        <div className="achtergrondkleur">
            <div className="popup_content ">
                <div className="row">
                    <div className="col-1-of-2">
                        <h2 className="loginHeader">login</h2>
                        <div className="login firstone">username</div>
                        <input className="text-login" type="text" value={usernameInlog}
                               onChange={(event) => setusernameInlog(event.target.value)}/>
                        <div className="login">wachtwoord</div>
                        <input className="text-login" type="password" value={passwordInlog}
                               onChange={(event) => setpasswordInlog(event.target.value)}/><br/>
                        <button className="btn" onClick={handleInlog}>comfirm</button>
                        <br/>
                        <Link to="/vergeten?">wachtwoord vergeten?</Link>
                    </div>
                    <div className="col-1-of-2">
                        <h2 className="loginHeader">create an account</h2>
                        <div className="create">username</div>
                        <input className="text-username" type="text" value={username}
                               onChange={(event) => setUsername(event.target.value)}/>
                        <div className="create">email</div>
                        <input className="text-username" type="email" value={email}
                               onChange={(event) => setemail(event.target.value)}/>
                        <div className="create">date of birth</div>
                        <input className="text-username" type="date" value={birthdate}
                               onChange={(event) => setbirthdate(event.target.value)}/>
                        <div className="create">password</div>
                        <input className="text-username" type="password" value={password}
                               onChange={(event) => setpassword(event.target.value)}/>
                        <div className="create">confirm password</div>
                        <input className="text-username" type="password" value={password}
                               onChange={(event) => setpassword(event.target.value)}/>
                        <br/>
                        <button className="btn" onClick={handleSubmit}>confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loginpage;