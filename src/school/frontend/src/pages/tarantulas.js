import React, {useState} from "react";
import Nav from "../compoments/Navigation";
import Header from "../compoments/Header";
import Sectionabout from "../compoments/Sectionabout";
import Footer from "../compoments/Footer";
import foto12 from "../assets/Tarantulafotocompo.jpg";
import Sectionspecies from "../compoments/Sectionspecies";

const Tarantulaspage = () =>{
    const [animalInfo, setAnimalInfo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, toggleLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            toggleLoading(true);
            try {
                const result = await axios.get('/api/animalinfo/tarantulas');
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
            <Header className='header tarantulaPage' name="tarantula's" line="all you need to know">
            </Header>
            <Sectionabout titletext1="what are they??" headertext="some info about tarantula's"textone="Tarantula's give some people the creeps because of their large,
                    hairy bodies and legs. But these spiders are harmless to humans,
                    and their mild venom is weaker than a typical bee's.
                    Among arachnid enthusiasts, these spiders have become popular pets."
                          titletext2="shoud you get them as pets?" texttwo=" Tarantula's are low maintenance pet as your first tarantula you should get a 'new world' because these are calmer
                    and have Urticating hairs so there less likely to bite first.
                    its recommended to not handle tarantula's especially 'old worlds' because these are very defensive"
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
};

export default Tarantulaspage;