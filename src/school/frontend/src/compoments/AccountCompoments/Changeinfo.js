import React, {useState} from "react";
import speciesConstants from '../../constants/speciesConstants';
import infoAnimalsService from "../../service/infoAnimalsService";

const Changeinfo = () => {
    const [animalSpecies, setAnimalSpecies] = useState(null);
    const [animalName, setAnimalName] = useState(null);
    const [animalInformation, setAnimalInformation] = useState(null)
    const [animalPicture, setAnimalPicture] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        const result = infoAnimalsService.setanimalinfo(animalSpecies, animalName, animalInformation, animalPicture)
        alert("info is saved")
        setAnimalSpecies(null)
        setAnimalName(null)
        setAnimalInformation(null)
        setAnimalPicture(null)
        // if else for result
    }

    const handleFiles = async (event) => {
        const file = event.target.files[0]
        const base64 = await imageconvert(file)
        setAnimalPicture(base64)
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
            <label><h2>put in the name of the animal</h2><br/>
                <input placeholder="typ your message"
                       className="text-login"
                       id="name"
                       type="text"
                       value={animalName}
                       onChange={(event) => setAnimalName(event.target.value)}/><br/>
            </label>
            <label><h2>put in the image of the animal</h2><br/>
                <input type="file" id="img" onChange={handleFiles}/>
            </label><br/><br/>
            <label><h2>put in information about</h2><br/>
                <textarea id="info" rows="4" cols="50" className="some-info"
                          value={animalInformation}
                          onChange={(event) => setAnimalInformation(event.target.value)}/>
            </label><br/>
            {animalInformation === null && <label className="color-red">*all fields need to be filled in</label>}
            <br/>
            <button className="btn"
                    disabled={animalInformation === null || animalName === null || animalPicture === null || animalSpecies === null || animalInformation === undefined || animalName === undefined || animalPicture === undefined || animalSpecies === undefined}
                    onClick={handleSubmit}>confirm
            </button>
        </div>
    );
}
export default Changeinfo;