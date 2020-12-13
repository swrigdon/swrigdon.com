import React        from "react";
import {

    Switch,
    Route
}                   from "react-router-dom";
import Home         from "./home";
import AboutMe      from "./aboutMe";
import Education    from "./education";
import "../css/content.css";

const ContentPane = () =>{

    return(
        <Switch>
            <Route path = "/aboutMe">
                <AboutMe/>
            </Route>
            <Route path = "/education">
                <Education/>
            </Route>
            <Route path = "/">
                <Home/>
            </Route>
        </Switch>
    );
}

export default ContentPane;
