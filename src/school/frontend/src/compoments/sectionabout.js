import React from "react";

function sectionabout(props) {
    return <div>
        <section className="section-about">
            <div className="u-center-text u-margine-bottom-big">
                <h2 className="heading-secondary">
                    {props.headertext}
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
                        <img src={props.foto1} alt='' className={props.classfoto1}/>
                        <img src={props.foto2} alt='' className={props.classfoto2}/>
                        <img src={props.foto3} alt='' className={props.classfoto3}/>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default sectionabout;