import React            from "react";
import Home             from "./content/home";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const ContentPane = (props) => {

    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default ContentPane;
