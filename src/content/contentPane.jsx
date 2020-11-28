import React from "react";
import Home from "./home";
import {

    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "../css/content.css";

const ContentPane = () =>{

    return(
        <Router>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

export default ContentPane;
