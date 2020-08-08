import React from "react";
import "../index.css"
import {Link} from 'react-router-dom';



const nav = () => {
    return(<div>
        <div className="oke1234">
            <input type="checkbox" className="navigation_checkbox" id="navi-toggle"/>
                <label htmlFor="navi-toggle" className="navigation_button">
                    <span className="navigation_icon">&nbsp;</span>
                </label>
                <div className="navigation_background">&nbsp;</div>
                <nav className="navigation_nav">
                    <ul className="navigation_list">
                        <li className="navigation_item"><Link to="#popup" className="navigation_link">login</Link></li>
                        <li className="navigation_item"><Link to="/accountpage" className="navigation_link">account</Link>
                        </li>
                        <li className="navigation_item"><Link to="/forumpage" className="navigation_link">forum</Link></li>
                        <li className="navigation_item"><Link to="/lizardspage" className="navigation_link">lizard's</Link>
                        </li>
                        <li className="navigation_item"><Link to="/tortoiseandturtlepage" className="navigation_link">tortoise
                            and turtle</Link>
                        </li>
                        <li className="navigation_item"><Link to="/alligatorAndCrocodilepage"
                                                           className="navigation_link">alligator and
                            crocodile</Link></li>
                        <li className="navigation_item"><Link to="/constrictionSnakespage" className="navigation_link">constrictor
                            snakes</Link>
                        </li>
                        <li className="navigation_item"><Link to="/venomoussnakespage"
                                                           className="navigation_link">Venomous-Snakes</Link></li>
                        <li className="navigation_item"><Link to="/tarantulaspage"
                                                           className="navigation_link">tarantula's</Link></li>
                    </ul>
                </nav>
        </div>
        <div className="popup" id="popup">
            <div className="popup_content">
                <div className="row">
                    <div className="col-1-of-2">
                        <h2 className="loginHeader">login</h2>
                        <div className="login firstone">username</div>
                        <input className="text-login" type="text"/>
                            <div className="login">wachtwoord</div>
                            <input className="text-login" type="password"/>
                                <br/>
                                    <button>comfirm</button>
                    </div>
                    <div className="col-1-of-2">
                        <a href="#index.html" className="popup_close">&times;</a>
                        <h2 className="loginHeader">create an account</h2>
                        <div className="create">username</div>
                        <input className="text-username" type="text"/>
                            <div className="create">email</div>
                            <input className="text-username" type="email"/>
                                <div className="create">date of birth</div>
                                <input className="text-username" type="date"/>
                                    <div className="create">password</div>
                                    <input className="text-username" type="password"/>
                                        <div className="create">confirm password</div>
                                        <input className="text-username" type="password"/>
                                            <br/>
                                                <button>confirm</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default nav;