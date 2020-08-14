import React, {useState} from "react";
import Nav from "../compoments/Navigation";
import Header from "../compoments/Header";
import Sectionabout from "../compoments/Sectionabout";
import Footer from "../compoments/Footer";
import foto12 from "../assets/cerastes.jpg";
import Sectionspecies from "../compoments/Sectionspecies";

const Venomoussnakespage = () => {
    const [animalInfo, setAnimalInfo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, toggleLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            toggleLoading(true);
            try {
                const result = await axios.get('/api/animalinfo/venomoussnakes');
                // we zetten alleen het result object erin, want meer hebben we niet nodig
                setAnimalInfo(result.data.results);
                toggleLoading(false);
            } catch(error) {
                setError(error);
                toggleLoading(false);
            }
        }
        // we hebben de functie hierboven beschreven, vergeet niet om fetchData ook nog aan te roepen!
        fetchData();
    }, []);

    return(
        <div>
            <Nav/>
            <Header className='header venomPage' name="Venomous Snakes" line="all you need to know">
            </Header>
            <Sectionabout titletext1="what are they?" headertext="some info about Venomous Snakes"textone=" Venomous snakes are species of the suborder Serpentes that are capable of producing venom,
                    which they use for killing prey, for defense, and to assist with digestion of their prey.
                    The venom is typically delivered by injection using hollow or grooved fangs, although some venomous snakes lack well-developed fangs.
                    Common venomous snakes include the families Elapidae, Viperidae, Atractaspididae,
                    and some of the Colubridae. The toxicity of venom is mainly indicated by murine"
                          titletext2="shoud you get them as pets?" texttwo=" allot of venomous snakes are deadly they are only for expert keepers.
                    antivenom isn’t a guarantee for you to survive the bite of a venomous snake.
                    always handle them with that in mind."
                          foto1={foto12} classfoto1='composition_photo  composition_photo--p12'
            />
            <>
                {error !== null && <p>Er is iets misgegaan: {error}</p>}
                {loading === true && <p>Loading...</p>}

                <div className="container">
                    {/* we mappen over de pokemonlijst heen zodat er 20 Pokemon Componenten worden weergegeven */}
                    {animalInfo !== null && animalInfo.map(entry => {
                        return (
                            <Sectionspecies
                                url={entry.url}
                            />
                        );
                    })}
                </div>
            </>
            <Footer/>
        </div>
    );
}

export default Venomoussnakespage;