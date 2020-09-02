import React, {useState} from "react";
import {Link} from 'react-router-dom';


const Nav = () => {
    function handleClick(event) {
        event.preventDefault();
        alert('your logout');
        localStorage.clear();
        window.location= 'http://localhost:3000/'
    }
    return (
        <div>
            <input type="checkbox" className="navigation_checkbox" id="navi-toggle"/>
            <label htmlFor="navi-toggle" className="navigation_button">
                <span className="navigation_icon">&nbsp;</span>
            </label>
            <div className="navigation_background">&nbsp;</div>
            <nav className="navigation_nav">
                <ul className="navigation_list">
                    <li className="navigation_item"><a href="/" className="navigation_link">Home</a></li>
                    {/*zorgt er voor dat je inlog knop niet ziet als je niet ingelogd bent*/}
                    {localStorage.token === undefined &&
                    <li className="navigation_item"><a href="/loginpage" className="navigation_link">login</a></li>}
                    {/*zorgt er voor dat je dit alleen ziet als je ingelogd bent*/}
                    {localStorage.token !== undefined &&
                    <li className="navigation_item"><Link to="/accountpage" className="navigation_link">account</Link>
                    </li>}

                    <li className="navigation_item"><Link to="/forumpage" className="navigation_link">forum</Link>
                    </li>
                    <li className="navigation_item"><Link to="/lizardspage"
                                                          className="navigation_link">lizard's</Link>
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

                    {localStorage.token !== undefined &&
                    <li className="navigation_item" onClick={handleClick}><Link to="/accountpage" className="navigation_link">logout</Link>
                    </li>}
                </ul>
            </nav>
        </div>
    );
}

export default Nav;