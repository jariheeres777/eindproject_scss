import React, {useEffect, useState} from "react";
import speciesConstants from "../../constants/speciesConstants";
import InfoAnimalsService from "../../service/infoAnimalsService";
import adsService from "../../service/adsService";

const ManageAds = () => {
    // voor de select box
    const [animalInfo, setAnimalInfo] = useState(null);
    const [animalSpecies, setAnimalSpecies] = useState(null);
    const [filtered, setFiltered] = useState(null);
    const [animal, setAnimal] = useState(null);
    // voor de api call naar backend
    const [adPicture, setAdPicture] = useState(null)
    const [adName, setAdname] = useState(null)
    const [adPrice, setAdPrice] = useState(null)
    const [animalInformation, setAnimalInformation] = useState(null)
    const [userID, setUserID] = useState(null)
    const [error, setError] = useState(null);
    const [loading, toggleLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await InfoAnimalsService.getanimalinfo();
                setAnimalInfo(result.data)
                toggleLoading(false)
                let retrievedObject = localStorage.getItem('ID');
                setUserID(retrievedObject)
            } catch (error) {
                setError(error);
                toggleLoading(false)
            }
        }
        fetchData();
    }, []);
    useEffect(() => {
        if (animalSpecies !== null && animalInfo !== null) {
            setFiltered(animalInfo.filter((animal) => {
                return animal.species === animalSpecies
            }))
        }
    }, [animalSpecies]);
    const handleSubmit = (event) => {
        event.preventDefault()
        const result = adsService.setads(animalInformation,adPrice,adName,animal,userID)
        alert("info is saved");
        setAdPicture(null)
        setAdname(null)
        setAdPrice(null)
        setAnimalInformation(null)
        setFiltered(null)
        setAnimal(null)
        setAnimalSpecies(null)
        document.getElementById('format').value = '-- select an option --'
    }

    const handleFiles = async (event) => {
        const file = event.target.files[0]
        const base64 = await imageconvert(file)
        setAdPicture(base64)
    }

    const imageconvert = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = (() => {
                resolve(fileReader.result)
            });

            fileReader.onerror = ((error) => {
                reject(error)
            })
        })
    }
    return (
        <div defaultValue className="u-center-text section-about color-orange ">
            <label htmlFor="soorten"><h2>Choose the specie</h2><br/>
                <div>
                    <select className="select-css" id="format" value={animalSpecies}
                            onChange={(event) => setAnimalSpecies(event.target.value)}>
                        <option disabled selected value="-- select an option --">-- select an option --</option>
                        <option value={speciesConstants.alligator}>alligator and Crocodile's</option>
                        <option value={speciesConstants.constrictorSnake}>constriction Snakes</option>
                        <option value={speciesConstants.lizard}>lizards</option>
                        <option value={speciesConstants.tarantula}>tarantulas</option>
                        <option value={speciesConstants.turtle}>tortoise and turtle</option>
                        <option value={speciesConstants.venom}>venomous Snakes</option>
                    </select><br/><br/>
                </div>
            </label>
            {filtered !== null &&
            <div>
                <label><h2>put in the name of the animal</h2><br/>
                    <div>
                        <select className="select-css" value={animal}
                                onChange={(event) => setAnimal(event.target.value)}>
                            <option disabled selected value="-- select an option --">-- select an option --</option>
                            {filtered.map((item) => {
                                return <option key={item} value={item.animalID}>{item.animal}</option>;
                            })}
                        </select>
                    </div>
                </label><br/>
                <label><h2>put in the name of the ad</h2><br/>
                    <input placeholder="typ your message"
                           className="text-login"
                           id="name"
                           type="text"
                           value={adName}
                           onChange={(event) => setAdname(event.target.value)}/><br/>
                </label>
                <label><h2>put in the image of the animal</h2><br/>
                    <input type="file" id="img" onChange={handleFiles}/>
                </label><br/><br/>
                <label><h2>put in information about</h2><br/>
                    <textarea id="info" rows="4" cols="50" className="some-info"
                              value={animalInformation}
                              onChange={(event) => setAnimalInformation(event.target.value)}/>
                </label>
                <br/>
                <label><h2>put in the price of the animal</h2><br/>
                    <input placeholder="typ your message"
                           className="text-login"
                           id="name"
                           type="text"
                           value={adPrice}
                           onChange={(event) => setAdPrice(event.target.value)}/><br/>
                </label>
                {animalInformation === null && <label className="color-red">*all fields need to be filled in</label>}
                <br/>
                <button className="btn"
                        disabled={adPrice === null}
                        onClick={handleSubmit}>confirm
                </button>

            </div>
            }
        </div>
    )
}
export default ManageAds
