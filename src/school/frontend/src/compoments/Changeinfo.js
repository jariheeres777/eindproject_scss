import React,{useState} from "react";
import {PluginObj as axios} from "@babel/core";

const Changeinfo = () => {
    const [animalName, setAnimalName] = useState();
    const [animalSpecies, setAnimalSpecies] = useState();
    const [animalInformation,setAnimalInformation]= useState()
    const [animalPicture,setAnimalPicture]=useState()
    const handleSubmit = async (event) => {
        event.preventDefault() // om te voorkomen dat de pagina ververst
        try {
            const result = await axios.post('/api/........', {
                animal: animalName,
                andereWaarde: null,
                return:alert('files are saved'),
            })
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <div className="u-center-text section-about">
            <label htmlFor="soorten">Choose the specie<br/>
                <div>
                    <select className="format select" id="format" value={animalSpecies}
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
            <label>put in the name of the animal<br/>
                <input placeholder="typ your message"
                       className="text-login"
                       type="text"
                       value={animalName}
                       onChange={(event) => setAnimalName(event.target.value)}/><br/>
            </label>
            <label>put in the image of the animal<br/>
                <input type="file" id="img" name="img" accept="image/*" value={animalPicture}
                       onChange={(event) => setAnimalPicture(event.target.value)}></input><br/><br/>
            </label>
            <label>put in information about<br/>
                <textarea rows="4" cols="50" className="some-info" type="text"
                          value={animalInformation}
                          onChange={(event) => setAnimalInformation(event.target.value)}/><br/>
            </label>
            <button className="btn" onClick={handleSubmit}>confirm</button>
        </div>
    );
}
export default Changeinfo;