import React from "react";
import {Link} from 'react-router-dom';
import Header from '../compoments/Header'
import foto10 from '../assets/Knipsel.PNG'
import foto4 from '../assets/Green_turtle_swimming.jpg'
import foto5 from '../assets/Crocodylus2.jpg'
import foto6 from '../assets/moloch_close_up_-_christopher_watson.jpg'
import foto7 from '../assets/netpython740x433.jpg'
import foto8 from '../assets/blue-viper-venomous-poisonous-snake-Venomous-Snakes-ss-Featured.jpg'
import foto9 from '../assets/1200px-Grammostola_pulchra_(aka).jpg'
import Nav from "../compoments/Navigation";
import Sectionabout from "../compoments/Sectionabout"
import Footer from "../compoments/Footer"
import foto1 from '../assets/schildpad_paardenbloem.jpg'
import foto2 from '../assets/groene boompython.jpg'
import foto3 from '../assets/kameleon1.jpg'

const Homepage = () => {

    return (
        <div>
            <Nav/>
            <Header className='header mainpage' name="exotics" line="Find your next exotic"
                    button='btn btn--white btn--animation' buttontext='guides to help you choose'>
            </Header>
            <Sectionabout titletext1="why uss?" headertext="our goals as a website" textone="the exotics forum is a modern platform for reptile enthusiasts from all over the world to share
                        skills, knowledge, and interests.
                        its a great place for experts and beginners for there first animal or ther tenth animal."
                          titletext2="our story" texttwo=" were a semi-professional group of people with a combined experience over 100 years of exotics
                        animals and were here to build the best communities of keepers of exotics."
                          foto1={foto1} classfoto1='composition_photo composition_photo--p1' foto2={foto2}
                          classfoto2='composition_photo composition_photo--p2'
                          foto3={foto3} classfoto3="composition_photo composition_photo--p3"/>
            <section className="section-features">
                <div className="u-center-text u-margine-bottom-big">
                    <h2 className="heading-secondary color-change">
                        pick your animal group
                    </h2>
                </div>
                <div className="picking-your-animal color-orange">
                    <span className="fotos-one">tortoise and turtle</span>
                    <span className="fotos-two">alligator and crocodile</span>
                    <span className="fotos-three">lizard's</span>
                    <Link to="/tortoiseandturtlepage"><img src={foto4} alt="photo4"
                                                           className="composition_photo-two composition_photo--p4"/>
                    </Link>
                    <Link to="/alligatorAndCrocodilepage"><img src={foto5} alt="photo5"
                                                               className="composition_photo-two composition_photo--p5"/>
                    </Link>
                    <Link to="/lizardspage"><img src={foto6} alt="photo6"
                                                 className="composition_photo-two composition_photo--p6"/></Link>
                    <span className="fotos-one">constrictor snakes</span>
                    <span className="fotos-two">Venomous-Snakes</span>
                    <span className="fotos-three">tarantula's</span>
                    <Link to="/constrictionSnakespage"><img src={foto7} alt="photo7"
                                                            className="composition_photo-two composition_photo--p7"/>
                    </Link>
                    <Link to="/venomoussnakespage"><img src={foto8} alt="photo8"
                                                        className="composition_photo-two composition_photo--p8"/>
                    </Link>
                    <Link to="/tarantulaspage"><img src={foto9} alt="photo9"
                                                    className="composition_photo-two composition_photo--p9"/></Link>
                </div>
            </section>
            <section className="section-about section-two">
                <div className="u-center-text u-margine-bottom-big">
                    <h2 className="heading-secondary forum">
                        the forum
                    </h2>
                </div>
                <div className="gate-to-forum u-center-text color-orange">
                    <p>the forum is the place were you can share your thoughts and experiences with like-minded keepers and hobbyists
                    </p>
                </div>
                <div className="gate-to-forum u-center-text">
                    <Link to="/forumpage">
                        <img src={foto10} alt="photo10" className="composition_photo-three "/>
                    </Link>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Homepage;