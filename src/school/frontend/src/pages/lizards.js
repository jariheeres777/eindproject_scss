import React from "react";
import Nav from "../compoments/Navigation";
import Header from "../compoments/Header";
import Sectionabout from "../compoments/Sectionabout";
import Footer from "../compoments/Footer";
import foto11 from "../assets/komodovaraan.jpg";
import Sectionspecies from "../compoments/Sectionspecies";

const Lizardspage = () => {
    return (
        <div>
            <Nav/>
            <Header className='header lizardsPage' name="lizard's" line="all you need to know">
            </Header>
            <Sectionabout titletext1="what are they?" headertext="some info about lizard's" textone="t
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                    ranging across all continents except Antarctica, as well as most oceanic island chains.
                    The group is paraphyletic as it excludes the snakes and Amphisbaenia.
                    some lizards are more closely related to these two excluded groups than they are to other lizards.
                    Lizards range in size from chameleons and geckos a few centimeters long to the 3 meter long Komodo dragon."
                          titletext2="shoud you get them as pets?" texttwo="there are allot of good beginners pets like bearded dragons.
                    there is something for everyone here from small lizards like geckos to bigger
                    animals like teju's."
                          foto1={foto11} classfoto1='composition_photo  composition_photo--p11'/>
            <Sectionspecies url='/api/animalinfo/lizards'/>

            <Footer/>
        </div>
    );
};

export default Lizardspage;