import React from "react";
import logosite from '../assets/cobralogo.png'
import {Link} from 'react-router-dom';


const footer = () => {
    return (
    <div>
        <footer className="footer">
        <div className="footer_logo-box u-center-text">
            <a href="#top"><img src={logosite} alt="logo" className="header__logo"/></a>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <div className="footer_navigation">
                    <ul className="footer_list">
                        <li className="footer_item">
                            <Link
                                to=""
                                className="footer_link" target="_blank">Company
                            </Link>
                        </li>
                        <li className="footer_item"><Link to="" className="footer_link" >Contact us</Link></li>
                        <li className="footer_item"><Link to="" className="footer_link" >Carreers</Link></li>
                        <li className="footer_item"><Link to="" className="footer_link">Privacy policy</Link></li>
                        <li className="footer_item"><Link to="" className="footer_link" >Terms</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row col-1-of-2">
                <p className="footer_copyright">
                    built by <Link to="" className="footer_link">jariheeres</Link>
                </p>
            </div>
        </div>
        </footer>
    </div>
    );
};

export default footer;