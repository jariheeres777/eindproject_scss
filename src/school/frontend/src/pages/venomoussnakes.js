import React, {useState, useEffect} from "react";
import axios from "axios"
import Nav from "../compoments/Navigation";
import Header from "../compoments/Header";
import Sectionabout from "../compoments/Sectionabout";
import Footer from "../compoments/Footer";
import foto12 from "../assets/cerastes.jpg";
import Sectionspecies from "../compoments/Sectionspecies";
import speciesConstants from '../constants/speciesConstants';
const Venomoussnakespage = () => {
    return (
        <div>
            <Nav/>
            <Header className='header venomPage' name="Venomous Snakes" line="all you need to know">
            </Header>
            <Sectionabout titletext1="what are they?" headertext="some info about Venomous Snakes" textone=" Venomous snakes are species of the suborder Serpentes that are capable of producing venom,
                    which they use for killing prey, for defense, and to assist with digestion of their prey.
                    The venom is typically delivered by injection using hollow or grooved fangs, although some venomous snakes lack well-developed fangs.
                    Common venomous snakes include the families Elapidae, Viperidae, Atractaspididae,
                    and some of the Colubridae. The toxicity of venom is mainly indicated by murine"
                          titletext2="shoud you get them as pets?" texttwo=" allot of venomous snakes are deadly they are only for expert keepers.
                    antivenom isn’t a guarantee for you to survive the bite of a venomous snake.
                    always handle them with that in mind."
                          foto1={foto12} classfoto1='composition_photo  composition_photo--p12'/>
            <Sectionspecies species={speciesConstants.venom}/>
            <Footer/>
        </div>
    );
}

export default Venomoussnakespage;