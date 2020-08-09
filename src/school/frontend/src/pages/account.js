import React from "react";
import Nav from "../compoments/navigation";




const accountpage = () =>{
    return (
        <div>
            <Nav/>
            <div className="sidebar">
                <h1>Account</h1>
                <a href="notindex.html">Home</a>
                <a href="">private massages</a>
                <a href="">offers</a>
                <a href="">bid</a>
                <a href="">saved ads</a>
                <a href="">manage ads</a>
                <a href="">change info</a>
            </div>

        </div>


    );
};

export default accountpage;