import React from "react";
import {Link} from 'react-router-dom';
import Nav from "../compoments/Navigation";
import Changeinfo from "../compoments/AccountCompoments/Changeinfo";
import Privatemessege from "../compoments/AccountCompoments/Privatemessage"
import Bidinfo from "../compoments/AccountCompoments/BidInfo"
import Savedads from "../compoments/AccountCompoments/SavedAds"
import Offersinfo from "../compoments/AccountCompoments/Offersinfo"
import Manageads from "../compoments/AccountCompoments/ManageAds"

const pages = {
    changeInfo:"change-info",
    privateMessage:"private-message-info",
    bidInfo:"bid-info",
    offers:"offers-info",
    savedAds:"saved-ads",
    manageAds:"manage-ads"
}

function Accountpage() {
    const [activepage, setActivepage] = React.useState()
    function handleClick(event) {
        event.preventDefault();
        alert('your logout');
        localStorage.clear();
        window.location= 'http://localhost:3000/'
    }


    return (
        <div>
            <Nav/>
            {activepage === pages.privateMessage && <Privatemessege/>}
            {activepage === pages.offers && <Offersinfo/>}
            {activepage === pages.bidInfo && <Bidinfo/>}
            {activepage === pages.savedAds && <Savedads/>}
            {activepage === pages.manageAds && <Manageads/>}
            {activepage === pages.changeInfo && <Changeinfo/>}
            <div className="sidebar">
                <h1>Account</h1>
                <Link to="/" style={{textDecoration: 'none'}}><button>Home</button></Link>
                <button onClick={() => setActivepage(pages.privateMessage)}>Private message</button>
                <button onClick={() => setActivepage(pages.offers)}>Offers</button>
                <button onClick={() => setActivepage(pages.bidInfo)}>Bid</button>
                <button onClick={() => setActivepage(pages.savedAds)}>Saved ads</button>
                <button onClick={() => setActivepage(pages.manageAds)}>Manage ads</button>
                {localStorage.roles === "ROLE_ADMIN" && <button onClick={() => setActivepage(pages.changeInfo)}>Change info</button>}
                <button onClick={handleClick}>logout</button>
            </div>
        </div>
    );

};

export default Accountpage;