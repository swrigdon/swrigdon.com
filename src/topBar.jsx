import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { 
    Link as RouterLink,
    BrowserRouter as Router 
} from "react-router-dom";

const TopBar = () =>{

    return(
        <Router>
            <Box
                bg      = "#333333"
                w       = "100%"
                py      = {4}
                pl      = {10}
                color   = "white"
                as      = "h1"
            >
                Stephen William Rigdon
                <Link 
                    pl  = {20}
                    as  = {RouterLink}
                    to  = "/aboutme"
                >
                    About Me
                </Link>
                <Link 
                    pl  = {10}
                    as  = {RouterLink}
                    to  = "/education"
                >
                    My Education
                </Link>
                <Link 
                    pl  = {10}
                    as  = {RouterLink}
                    to  = "/career"
                >
                    My Career
                </Link>
                <Link 
                    pl  = {10}
                    as  = {RouterLink}
                    to  = "/projects/home"
                >
                    My Projects
                </Link>
                <Link
                    pl      = {10}
                    href    = "https://docs.google.com/document/d/1fo_6aZ1ikzC2wWy5SYEKG37qytN1OPtyNMP9aAsPYFs/export?format=pdf"
                    target  = "_blank"
                >
                    My Resume
                </Link>
            </Box>
        </Router>
    );
};

export default TopBar;
