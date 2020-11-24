import React from "react";
import{
    BrowserRouter as Router,
    Link
} from "react-router-dom"

const TopBar = (props) =>{

    return(
        <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
            <div className = "container-fluid pl-3">
                <span className = "navbar-brand">Stephen William Rigdon</span>
                <button 
                    className       = "navbar-toggler" 
                    type            = "button" 
                    data-toggle     = "collapse" 
                    data-target     = "#navbarNav" 
                    aria-controls   = "navbarNav" 
                    aria-expanded   = "false" 
                    aria-label      = "Toggle navigation"
                >
                    <span className = "navbar-toggler-icon"></span>
                </button>
                <Router>
                    <div className = "collapse navbar-collapse d-flex justify-content-beginning" id = "navbarNav">
                        <ul className = "navbar-nav">
                            <li className = "nav-item ml-5">
                                <Link 
                                    to          = "/"
                                    className   = "nav-link"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className = "nav-item ml-5">
                                <Link 
                                    to          = "/work"
                                    className   = "nav-link"
                                >
                                    Work Experience
                                </Link>
                            </li>
                            <li className = "nav-item ml-5">
                                <Link 
                                    to          = "/education"
                                    className   = "nav-link"
                                >
                                    Education
                                </Link>
                            </li>
                            <li className = "nav-item ml-5">
                                <Link 
                                    to          = "/projects"
                                    className   = "nav-link"
                                >
                                    My Projects
                                </Link>
                            </li>
                            <li className = "nav-item ml-5">
                                <a 
                                    className   = "nav-link"
                                    href        = "https://docs.google.com/document/d/1fo_6aZ1ikzC2wWy5SYEKG37qytN1OPtyNMP9aAsPYFs/export?format=pdf"
                                    target      = "_blank"
                                    rel         = "noreferrer"
                                >
                                    My Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </Router>
            </div>
        </nav>
    );
}

export default TopBar;
