import React, {useState} from "react";
import axios from "axios"



const Changeinfo = () => {
    function imgToBase64(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;

        // I think this won't work inside the function from the console
        img.crossOrigin = 'anonymous';

        ctx.drawImage(img, 0, 0);
        console.log(canvas)
        return canvas.toDataURL();
    }

    const [animalSpecies, setAnimalSpecies] = useState();
    const [animalName, setAnimalName] = useState();
    const [animalInformation, setAnimalInformation] = useState()
    const [animalPicture, setAnimalPicture] = useState()

    const handleSubmit = async (event) => {

        event.preventDefault()
        try {
            const result = await axios.post('/api/animalinfo', {
                species: animalSpecies,
                animal: animalName,
                info: animalInformation,
                picture:animalPicture
            }).then(function (result) {
                alert("info is saved");})
            document.getElementById('name').value = ''
            document.getElementById('img').value = ''
            document.getElementById('info').value = ''
            document.getElementById('format').value = '-- select an option --'
        } catch (error) {
            console.error(error);
        }

    }

    function handleFiles(e) {
        var input = document.getElementById('img');
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image();

        img.onload = function() {
            ctx.drawImage(img, 0, 0);

            var animalPicture = canvas.toDataURL();
            console.log(animalPicture)
            setAnimalPicture(animalPicture)
        }

        img.src = URL.createObjectURL(e.target.files[0]);
    }

    return (
        <div defaultValue className="u-center-text section-about color-orange ">
            <label htmlFor="soorten"><h2>Choose the specie</h2><br/>
                <div>
                    <select className="select-css" id="format" value={animalSpecies}
                            onChange={(event) => setAnimalSpecies(event.target.value)}>
                        <option disabled selected value="-- select an option --">-- select an option --</option>
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
            <button className="btn" onClick={handleSubmit}>confirm</button>
        </div>
    );
}
export default Changeinfo;