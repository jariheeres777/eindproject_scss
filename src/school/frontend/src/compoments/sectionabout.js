import React from "react";
import nav from "./navigation";
import foto1 from '../assets/schildpad_paardenbloem.jpg'
import foto2 from '../assets/groene boompython.jpg'
import foto3 from '../assets/kameleon1.jpg'

function sectionabout(props) {
    return <div>
        <section className="section-about">
            <div className="u-center-text u-margine-bottom-big">
                <h2 className="heading-secondary">
                    our goals as a website
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margine-bottom-small">{props.titletext1}</h3>
                    <p className="paragraph color-orange">
                        {props.textone}
                    </p>
                    <h3 className="heading-tertiary u-margine-bottom-small">{props.titletext2}</h3>
                    <p className="paragraph color-orange">
                        {props.texttwo}
                    </p>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={foto1} alt="photo 1" className="composition_photo composition_photo--p1"/>
                        <img src={foto2} alt="photo 2" className="composition_photo composition_photo--p2"/>
                        <img src={foto3} alt="photo 3" className="composition_photo composition_photo--p3"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
}
export default sectionabout;