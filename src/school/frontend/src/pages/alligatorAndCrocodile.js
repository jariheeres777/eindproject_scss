import React from "react";
import Nav from "../compoments/Navigation";
import Header from "../compoments/Header";
import Sectionabout from "../compoments/Sectionabout";
import Footer from "../compoments/Footer";
import foto10 from "../assets/aligator - crocodile.jpg";

const alligatorAndCrocodilepage = () =>{
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
            <Footer/>
        </div>
    );
};

export default alligatorAndCrocodilepage;