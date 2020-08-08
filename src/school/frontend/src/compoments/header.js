import React from "react";
import "../index.css"
import foto1 from "../assets/cobralogo.png"
import {Link} from 'react-router-dom';
function header(props){
    return <div>
        <header className={props.className}>
            <div className="header__logo-box">
                <Link to="/"><img src={foto1} alt="logo" className="header__logo"/></Link>
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">{props.name}</span>
                    <span className="heading-primary--sub">{props.line}</span>
                </h1>
                <Link to="https://www.youtube.com/channel/UCH18915fTE6yZzKrqdea8RQ"
                      className="btn btn--white btn--animation"
                      target="_blank">guides to help you choose</Link>
            </div>
        </header>
    </div>
};

export default header;