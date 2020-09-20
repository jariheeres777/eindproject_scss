import React, {useEffect, useState} from "react";
import BidSeervice from "../../service/bidService"
import AdsService from "../../service/adsService";
import axios from "axios";

const OffersInfo = () => {
    const [adsinfo, setadsinfo] = useState(null);
    const [userID, setUserID] = useState(null);
    const [filteredadsinfo, setFilteredadsinfo] = useState(null);
    const [activePickedAds, setActivePickedAds] = useState(null);
    const [bieding, setBieding] = useState(null);
    const [filteredbids, setFilteredbids] = useState(null);
    const [activePickedbid, setActivePickedbid] = useState(null);
    const [selectedFilteredbids, setSelectedFilteredbids] = useState(null);
    const [accepted, setaccepted] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await AdsService.getads();
                //filtert data hier
                setadsinfo(result.data);
            } catch (error) {
                console.log(error);
            }
            let retrievedObject = localStorage.getItem('ID');
            setUserID(retrievedObject);
        }
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await BidSeervice.getbid();
                setBieding(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [adsinfo]);
    useEffect(() => {

        if (userID !== null && adsinfo !== null) {
            setFilteredadsinfo(adsinfo.filter((item) => {
                // == inplaats van === omdat er iets is met getal geen idee wat
                return item.usernamebyid == userID
            }))

        }
    }, [userID]);
    useEffect(() => {
        setActivePickedbid("-- select an option --")
        if (activePickedAds !== null && bieding !== null) {
            setFilteredbids(bieding.filter((item) => {
                return item.infofromid == activePickedAds
            }))
        }
    }, [activePickedAds]);
    useEffect(() => {
        setaccepted(false)
        if (activePickedbid !== null && bieding !== null) {
            setSelectedFilteredbids(bieding.filter((item) => {
                return item.bidID == activePickedbid
            })[0])

        }

    }, [activePickedbid]);
    // setparametervoordelete(selectedFilteredbids.bidID);
    const handleacceptoffer = async (event) => {
        setaccepted(true)
    }
    // de url zou je het beste in de bidservice moeten zetten alleen dit werkte niet helemaal
    let url = "http://localhost:8080/api/biedingen/"+activePickedbid;
    console.log(url)
    const handledeclineoffer = async () => {
        // Whatever you want to do with that item
        axios.delete(url).then(response => {
            console.log(response);
        });
        alert("Bid has been removed")
        window.location= 'http://localhost:3000/accountpage'
    }
// console.log(activePickedbid)
    return (
        <div defaultValue className="u-center-text section-about color-orange ">
            {filteredadsinfo !== null &&
            <>
                <label htmlFor="soorten"><h2>Choose the specie</h2><br/></label>
                <div>
                    <select className="select-css" value={activePickedAds}
                            onChange={(event) => setActivePickedAds(event.target.value)}>
                        <option disabled selected value="-- select an option --">-- select an option --</option>
                        {filteredadsinfo.map((item) => {
                            return <option key={item.bidID} value={item.adID}>{item.adname}</option>;
                        })}
                    </select><br/><br/>
                    {filteredbids !== null &&
                    <>
                        <label htmlFor="soorten"><h2>Select bids on the advetention</h2><br/></label>
                        <select className="select-css" value={activePickedbid}
                                onChange={(event) => setActivePickedbid(event.target.value)}>
                            <option disabled selected value="-- select an option --">-- select an option --</option>
                            {filteredbids.map((item) => {
                                return <option key={item.bidID} value={item.bidID}>{item.pricebid}</option>;
                            })}
                        </select><br/><br/>
                        {selectedFilteredbids !== null && selectedFilteredbids !== undefined &&
                        <>
                            <button className="btn"
                                    onClick={handleacceptoffer}>accept offer
                            </button>
                            <br/><br/>
                            <button className="btn"
                                    onClick={handledeclineoffer}>decline offer
                            </button>
                            <br/><br/>
                            {accepted === true &&
                            <>
                                <label htmlFor="soorten"><h2>you can contact the buyer
                                    at {selectedFilteredbids.emailfrombuyer}</h2><br/></label>
                            </>}
                        </>}

                    </>
                    }

                </div>
            </>
            }
        </div>
    )
}
export default OffersInfo;
