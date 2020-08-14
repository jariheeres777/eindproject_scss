import React, {useState} from "react";
import Nav from "../compoments/Navigation";
import Header from "../compoments/Header";
import Sectionabout from "../compoments/Sectionabout";
import Footer from "../compoments/Footer";
import foto12 from "../assets/Macrochelyssmaller.jpg";
import Sectionspecies from "../compoments/Sectionspecies";

const Tortoiseandturtlepage = () =>{
    const [animalInfo, setAnimalInfo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, toggleLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            toggleLoading(true);
            try {
                const result = await axios.get('/api/animalinfo/tortoiseandturtle');
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
            <Header className='header turtlepage' name="tortoise and turtle" line="all you need to know">
            </Header>
            <Sectionabout titletext1="difference between turtle and tortoise"headertext="some info about tortoise and turtle" textone="Tortoises have more rounded and domed shells where turtles have thinner, more water-dynamic shells.
                    Turtle shells are more streamlined to aid in swimming.
                    One major key difference is that tortoises spend most of their time on land and turtles are adapted for life spent in water.
                    Tortoises have club-like forelegs and 'elephantine' hind legs. Because tortoise are often larger and heavier,
                    there elephantine hind legs help them move around and carry the extra weight!
                    Turtles will have more flipper like legs, or webbed feet to make it easier to cruise through the water."
                          titletext2="shoud you get them as pets?" texttwo="they are very dosile but they can get very big and old.
                    so feel free to check them out in this section."
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

export default Tortoiseandturtlepage;