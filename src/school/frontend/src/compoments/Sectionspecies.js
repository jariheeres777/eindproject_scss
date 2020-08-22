import React, {useState} from "react";
import axios from "axios"


function Sectionspecies(props) {
    // const [animalInfo, setAnimalInfo] = useState();
    // const [error, setError] = useState(null);
    // const [loading, toggleLoading] = useState(false);
    // const foto = atob(animalInfo.picture)
    //
    // useState(() => {
    //     const fetchData = async () => {
    //         toggleLoading(true);
    //         try {
    //             const result = await axios.get(props.url);
    //             setAnimalInfo(result.data);
    //             toggleLoading(false);
    //         } catch (error) {
    //             setError(error);
    //             toggleLoading(false);
    //         }
    //     }
    //     fetchData();
    // }, []);


    return (
        <div className="u-center-text   section-animals">
            {/*{error !== null && <p>Er is iets misgegaan: {error}</p>}*/}
            {/*{loading === true && <p>Loading...</p>}*/}
            {/*{<>*/}
            {/*    <h1 className="heading-secondary u-margine-bottom-big">pick your species</h1>*/}
            {/*    <div>*/}
            {/*        <select className="select-css " id="format">*/}
            {/*            <option disabled selected value> -- select an option --</option>*/}
            {/*            <option>*/}
            {/*                <ul>*/}
            {/*                    {animalInfo.props.name.map(props.name => <select>{name.name}</select>)}*/}
            {/*                </ul>*/}
            {/*            </option>*/}
            {/*        </select><br/><br/>*/}
            {/*        <div>*/}
            {/*            <h1 className="heading-secondary u-margine-bottom-big"></h1>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <p>blablabla</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</>*/}
            {/*}*/}
        </div>

    )
}


export default Sectionspecies;