import React, {useEffect, useState} from "react";
import InfoAnimalsService from '../service/infoAnimalsService'
import axios from "axios";
import AdsService from "../service/adsService";

function Sectionspecies(props) {
    //voor het dier
    const [userID, setUserID] = useState(null)
    const [animalInfo, setAnimalInfo] = useState(null);
    const [activeAnimal, setActiveAnimal] = useState(null);
    const [activeInfo, setActiveInfo] = useState(null);
    const [bidValue, setBidValue] = useState(null)
    const [error, setError] = useState(null);
    const [loading, toggleLoading] = useState(false);
    // voor de ads  setActivePickedAds
    const [activePickedAds, setActivePickedAds] = useState(null)
    const [adsinfo, setadsinfo] = useState(null)
    const [activeAds, setActiveAds] = useState(null);
    // const foto = atob(animalInfo.picture)
    // let newOption = new Option('Option Text', 'Option Value');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await InfoAnimalsService.getanimalinfo();
                //filtert data hier
                setAnimalInfo(result.data.filter((item) => {
                    return item.species === props.species
                }))
                toggleLoading(false)

            } catch (error) {
                setError(error);
                toggleLoading(false)
            }
        }
        fetchData();
    }, []);
    useEffect(() => {
        if (activeAnimal !== null && animalInfo !== null) {
            setActiveInfo(animalInfo.filter((animal) => {
                return animal.animal === activeAnimal
            })[0])

        }
    }, [activeAnimal]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await AdsService.getads();
                //filtert data hier
                setadsinfo(result.data.filter((item) => {
                    return item.infofromid === activeInfo.animalID
                }))
                let retrievedObject = localStorage.getItem('ID');
                setUserID(retrievedObject)
                setActivePickedAds(null)

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [activeInfo]);
    useEffect(() => {
        if (activeAds !== null && adsinfo !== null) {
            setActivePickedAds(adsinfo.filter((animal) => {
                return animal.adname === activeAds
            })[0])

        }
    }, [activeAds]);
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const result = await axios.post('/api/biedingen', {
                pricebid: bidValue,
                infofromid: activePickedAds.adID,
                usernamebyid: userID,
            }).then(function (result) {
                alert("info is saved");
                setBidValue(null)
                document.getElementById('format').value = '-- select an option --'
            })

        } catch (error) {
            console.error(error);
        }
    }
    // console.log(activePickedAds.adID)

    return (
        <div className="u-center-text   section-animals">
            <>{animalInfo !== null &&
            (<div>
                    <h1 className="heading-secondary u-margine-bottom-big">pick your species</h1><br/>
                    <select className="select-css" value={activeAnimal}
                            onChange={(event) => setActiveAnimal(event.target.value)}>
                        <option disabled selected value="-- select an option --">-- select an option --</option>
                        {animalInfo.map((item) => {
                            return <option key={item.animalID} value={item.animal}>{item.animal}</option>;
                        })}
                    </select>
                    {activeInfo !== null &&
                    <><br/><br/><br/><br/>
                        <h1 className="heading-secondary u-margine-bottom-big">{activeInfo.animal}</h1>
                        <p className="color-orange">
                            {activeInfo.info}
                        </p>
                        <div>
                            <img src={activeInfo.picture} width="1500px"/>
                        </div>
                        <br/><br/><br/><br/>
                    </>}
                </div>
            )}
            </>
            <>
                {adsinfo !== null  && (
                    <>
                        <select className="select-css" value={activeAds}
                                onChange={(event) => setActiveAds(event.target.value)}>
                            <option disabled selected value="-- select an option --">-- select an option --</option>
                            {adsinfo.map((item) => {
                                return <option key={item.animalID} value={item.adname}>{item.adname}</option>;
                            })}
                        </select>
                        {activePickedAds !== null &&
                        <div className="ads-wrapper ">
                            <h1 className="heading-secondary u-margine-bottom-big">{activePickedAds.adname}</h1>
                            <p>
                                ${activePickedAds.pricead}
                            </p>
                            <p className="color-orange">
                                {activePickedAds.adtext}
                            </p>

                            <img src={activePickedAds.adPictures} width="500px"/><br/>
                            {userID !== null && (
                                <>
                                    <h2>put in the bid of the animal</h2>
                                    <input value={bidValue}
                                           onChange={(event) => setBidValue(event.target.value)}/><br/>
                                    <button className="btn" onClick={handleSubmit}>BID</button>
                                </>
                            )}
                            {userID === null && (
                                <>
                                    <h2>you need to be logged in to react to this ad</h2>
                                </>
                            )}
                        </div>}
                    </>

                )}
            </>
        </div>
    )
}


export default Sectionspecies;