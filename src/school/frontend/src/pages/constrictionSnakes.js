import React from "react";
import Nav from "../compoments/Navigation";
import Header from "../compoments/Header";
import Sectionabout from "../compoments/Sectionabout";
import Footer from "../compoments/Footer";
import foto11 from "../assets/EpicratesCenchriaCenchria4.jpg";
import Sectionspecies from "../compoments/Sectionspecies";
import speciesConstants from '../constants/speciesConstants';
const ConstrictionSnakespage = () => {

    return (
        <div>
            <Nav/>
            <Header className='header constrictorPage' name="constrictor snakes" line="all you need to know">
            </Header>
            <Sectionabout titletext1="what are they?" headertext="some info about CONSTRICTOR SNAKES" textone="Although some species of venomous and mildly venomous snakes do use constriction to subdue their prey,
                    most snakes which use constriction lack venom.
                    The snake initially strikes at its prey and holds on,
                    pulling the prey into its coils or, in the case of very large prey,
                    pulling itself onto the prey.
                    The snake will then wrap one or two loops around the prey, forming a constriction coil.
                    The snake will monitor the prey's heartbeat to ascertain when it is dead"
                          titletext2="shoud you get them as pets?" texttwo=" there are some great beginners pets like ballpythons.
                    there also allot for more experians keepers.
                    so if your here and you want a snake pet your at the right place.."
                          foto1={foto11} classfoto1='composition_photo  composition_photo--p11'/>
            <Sectionspecies species={speciesConstants.constrictorSnake}/>
            <Footer/>
        </div>
    );
};

export default ConstrictionSnakespage;