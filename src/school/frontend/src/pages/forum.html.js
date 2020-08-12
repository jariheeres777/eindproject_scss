import React from "react";
import Nav from "../compoments/Navigation";
import Header from "../compoments/Header";
import Sectionabout from "../compoments/Sectionabout";
import Footer from "../compoments/Footer";


const forumpage = () =>{
    return(
        <div>
            <Nav/>
            <Header className='header mainpage' name="exotics" line="Find your next exotic">
            </Header>
            <Sectionabout titletext1="why uss?" headertext="our goals as a website"textone="the exotics forum is a modern platform for reptile enthusiasts from all over the world to share
                        skills, knowledge, and interests.
                        its a great place for experts and beginners for there first animal or ther tenth animal."
                          titletext2="our story" texttwo=" were a semi-professional group of people with a combined experience over 100 years of exotics
                        animals and were here to build the best communities of keepers of exotics."
            />
            <Footer/>
        </div>
    );
};

export default forumpage;