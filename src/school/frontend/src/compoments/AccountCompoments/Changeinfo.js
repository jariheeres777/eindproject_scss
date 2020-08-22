import React, {useState} from "react";
import axios from "axios"

const Changeinfo = () => {
    const [animalSpecies, setAnimalSpecies] = useState();
    const [animalName, setAnimalName] = useState();
    const [animalInformation, setAnimalInformation] = useState()
    const [animalPicture, setAnimalPicture] = useState()
    const base64 = btoa(animalPicture)
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const result = await axios.post('/api/animalinfo', {
                species: animalSpecies,
                animal: animalName,
                info: animalInformation,
                picture: base64
            })
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <div defaultValue className="u-center-text section-about color-orange ">
            <label htmlFor="soorten"><h2>Choose the specie</h2><br/>
                <div>
                    <select className="select-css" id="format" value={animalSpecies}
                            onChange={(event) => setAnimalSpecies(event.target.value)}>
                        <option disabled selected value> -- select an option --</option>
                        <option value="alligatorandCrocodiles">alligator and Crocodile's</option>
                        <option value="constrictionSnakes">constriction Snakes</option>
                        <option value="lizards">lizards</option>
                        <option value="tarantulas">tarantulas</option>
                        <option value="tortoiseandturtle">tortoise and turtle</option>
                        <option value="venomoussnakes">venomous Snakes</option>
                    </select><br/><br/>
                </div>
            </label>
            <label><h2>put in the name of the animal</h2><br/>
                <input placeholder="typ your message"
                       className="text-login"
                       type="text"
                       value={animalName}
                       onChange={(event) => setAnimalName(event.target.value)}/><br/>
            </label>
            <label><h2>put in the image of the animal</h2><br/>
                <input type="file" id="img" name="img" accept="image/*" value={animalPicture}
                       onChange={(event) => setAnimalPicture(event.target.value)}/>
            </label><br/><br/>
            <label><h2>put in information about</h2><br/>
                <textarea rows="4" cols="50" className="some-info"
                          value={animalInformation}
                          onChange={(event) => setAnimalInformation(event.target.value)}/>
            </label><br/>
            <button className="btn" onClick={handleSubmit}>confirm</button>
        </div>
    );
}
export default Changeinfo;