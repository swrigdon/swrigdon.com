import React from "react";
import "../../css/home.css";
import Picture from "../../img/backgroundImage.jpg";

const Home = () =>{

    return(
        <div> 
            <div className = "headerBackground">
                <img src={Picture}/>
            </div>
            <div className = "headerContent">
                <h2>Stephen William Rigdon</h2>
            </div>
        </div>
    );
}

export default Home;
