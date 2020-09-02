import React, {useEffect, useState} from "react";
import axios from "axios"

function Sectionspecies(props) {

    const [animalInfo, setAnimalInfo] = useState(null);
    const [activeAnimal, setActiveAnimal] = useState(null);
    const [activeInfo, setActiveInfo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, toggleLoading] = useState(false);
    // const foto = atob(animalInfo.picture)
    // let newOption = new Option('Option Text', 'Option Value');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("http://localhost:8080/api/animalinfo");
                //alleen als het de prop heeft

                setAnimalInfo(result.data.filter((item) =>{return item.species === props.species}))
                toggleLoading(false)

            } catch (error) {
                setError(error);
                toggleLoading(false)
            }
        }
        fetchData();
    }, []);
    useEffect(() => {
        // activeAnimal !== null && setActiveInfo(animalInfo.filter((animal) => {
        //     return animal.name === activeAnimal
        // }))
        if(activeAnimal !== null && animalInfo !== null){
            setActiveInfo(animalInfo.filter((animal) => {return animal.animal === activeAnimal})[0])

        }
    }, [activeAnimal]);

    function base64toBlob(base64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);

        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);

            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, {type: contentType});
    }

    return (
        <div className="u-center-text   section-animals">
            <>{animalInfo !== null &&
            (<div>
                    <h1 className="heading-secondary u-margine-bottom-big">pick your species</h1><br/>
                    <select name="country" value={activeAnimal} onChange={(event)=> setActiveAnimal(event.target.value)}>
                        <option disabled selected value="-- select an option --">-- select an option --</option>
                        {animalInfo.map((item) => {
                            return <option key={item.animalID} value={item.animal}>{item.animal}</option>;
                        })}
                    </select>
                    {activeInfo !== null &&
                    <h1 className="heading-secondary u-margine-bottom-big">{activeInfo.animal}</h1>
                    }
                </div>
            )
            }
            </>

        </div>

    )
}


export default Sectionspecies;