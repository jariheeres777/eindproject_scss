import React from "react";
import {Link} from 'react-router-dom';
import Nav from "../compoments/Navigation";
import Changeinfo from "../compoments/Changeinfo";
import Privatemessege from "../compoments/Privatemessage"
import Bidinfo from "../compoments/BidInfo"
import Savedads from "../compoments/SavedAds"
import Offersinfo from "../compoments/Offersinfo"
import Manageads from "../compoments/ManageAds"

const pages = {
    changeInfo:"change-info",
    privateMessege:"private-message-info",
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

    }
    return (
        <div>
            <Nav/>
            {activepage === pages.privateMessege && <Privatemessege/>}
            {activepage === pages.offers && <Offersinfo/>}
            {activepage === pages.bidInfo && <Bidinfo/>}
            {activepage === pages.savedAds && <Savedads/>}
            {activepage === pages.manageAds && <Manageads/>}
            {activepage === pages.changeInfo && <Changeinfo/>}
            <div className="sidebar">
                <h1>Account</h1>
                <Link to="/" style={{textDecoration: 'none'}}><button>Home</button></Link>
                <button onClick={() => setActivepage(pages.privateMessege)}>Private message</button>
                <button onClick={() => setActivepage(pages.offers)}>Offers</button>
                <button onClick={() => setActivepage(pages.bidInfo)}>Bid</button>
                <button onClick={() => setActivepage(pages.savedAds)}>Saved ads</button>
                <button onClick={() => setActivepage(pages.manageAds)}>Manage ads</button>
                <button onClick={() => setActivepage(pages.changeInfo)}>Change info</button>
                <button onClick={handleClick}>logout</button>
            </div>
        </div>
    );

};

export default Accountpage;