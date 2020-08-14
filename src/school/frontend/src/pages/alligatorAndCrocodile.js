import React, {useState} from "react";
import axios from "axios"
import Nav from "../compoments/Navigation";
import Header from "../compoments/Header";
import Sectionabout from "../compoments/Sectionabout";
import Footer from "../compoments/Footer";
import foto10 from "../assets/aligator - crocodile.jpg";
import Sectionspecies from "../compoments/Sectionspecies"

const AlligatorAndCrocodilepage = () =>{
    const [animalInfo, setAnimalInfo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, toggleLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            toggleLoading(true);
            try {
                const result = await axios.get('/api/animalinfo/alligatorandCrocodiles');
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
    return (
        <div>
            <Nav/>
            <Header className='header aligatorPage' name="alligator and crocodile" line="Find your next exotic">
            </Header>
            <Sectionabout titletext1="some info about ALLIGATORS AND CROCODILES" headertext="Difference Between Alligators and Crocodiles?"textone="Snout shape: Alligators have wider, U-shaped snouts, while crocodile front ends are more pointed and V-shaped.
                    Toothy grin: When their snouts are shut, crocodiles look like they're flashing a toothy grin,
                    as the fourth tooth on each side of the lower jaw sticks up over the upper lip. For alligators, the upper jaw is wider than the lower one, so when they close their mouths, all their teeth are hidden.
                    Home base: Crocodiles tend to live in saltwater habitats, while alligators hang out in freshwater marshes and lakes."
                          titletext2="shoud you get them as pets?" texttwo="  Neither makes a good pet. The tamest they normally get is moderately aggressive.
                    The alligator is not as aggressive as the crocodile, but is still very dangerous. Getting either one of those species is a bad idea.
                    this section is only for expert keepers that are well aware of the risks."
                          foto1={foto10} classfoto1='composition_photo  composition_photo--p10'
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
};

export default AlligatorAndCrocodilepage;