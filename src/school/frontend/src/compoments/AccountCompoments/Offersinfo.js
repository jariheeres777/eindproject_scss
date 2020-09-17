import React, {useEffect, useState} from "react";
import axios from "axios";
import speciesConstants from "../../constants/speciesConstants";
import BidSeervice from "../../service/bidService"
import AdsService from "../../service/adsService";
const OffersInfo = () => {
    const [adsinfo, setadsinfo] = useState(null);
    const [userID, setUserID] = useState(null);
    const [filteredadsinfo, setFilteredadsinfo] = useState(null)
    const [activePickedAds, setActivePickedAds] = useState(null)
    const [bieding, setBieding] = useState(null)
    useEffect(() => {

        const fetchData = async () => {
            try {
                const result = await AdsService.getads();
                //filtert data hier
                setadsinfo(result.data)

            } catch (error) {
                console.log(error);
            }
            let retrievedObject = localStorage.getItem('ID');
            setUserID(retrievedObject)
        }
        fetchData();
    }, []);
    // useEffect(() => {
    //     // console.log(userID)
    //     if (userID !== null && adsinfo !== null) {
    //         setFilteredadsinfo(adsinfo.data.filter((item) => {
    //             return item.usernamebyid !== userID
    //         }))
    //     }
    //
    // }, [adsinfo]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:8080/api/biedingen");
                //filtert data hier
                // console.log(result.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [activePickedAds]);



    return (
        <div defaultValue className="u-center-text section-about color-orange ">
            {adsinfo !== null &&
            <label htmlFor="soorten"><h2>Choose the specie</h2><br/>
                <div>
                    <select className="select-css" value={activePickedAds}
                            onChange={(event) => setActivePickedAds(event.target.value)}>
                        <option disabled selected value="-- select an option --">-- select an option --</option>
                        {adsinfo.map((item) => {
                            return <option key={item.adid} value={item.adid}>{item.adname}</option>;
                        })}
                    </select>
                </div>
            </label>
            }
        </div>
    )
}
export default OffersInfo;
