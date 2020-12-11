import React    from "react";
import {

    Switch,
    Route
}               from "react-router-dom";
import Home     from "./home";
import AboutMe  from "./aboutMe";
import "../css/content.css";

const ContentPane = () =>{

    return(
        <Switch>
            <Route path = "/aboutMe">
                <AboutMe/>
            </Route>
            <Route path = "/">
                <Home/>
            </Route>
        </Switch>
    );
}

export default ContentPane;
