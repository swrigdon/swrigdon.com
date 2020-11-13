import React from "react";

const TopBar = () =>{

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
                <div className = "collapse navbar-collapse d-flex justify-content-beginning" id = "navbarNav">
                    <ul className = "navbar-nav">
                        <li className = "nav-item ml-5">
                            <a 
                                className   = "nav-link"
                                href        = "#"
                            >
                                About Me
                            </a>
                        </li>
                        <li className = "nav-item ml-5">
                            <a 
                                className   = "nav-link"
                                href        = "#"
                            >
                                Work Experience
                            </a>
                        </li>
                        <li className = "nav-item ml-5">
                            <a 
                                className   = "nav-link"
                                href        = "#"
                            >
                                Education
                            </a>
                        </li>
                        <li className = "nav-item ml-5">
                            <a 
                                className   = "nav-link"
                                href        = "#"
                            >
                                My Projects
                            </a>
                        </li>
                        <li className = "nav-item ml-5">
                            <a 
                                className   = "nav-link"
                                href        = "#"
                            >
                                My Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default TopBar;
