import React from "react";
import { Box, Link }            from "@chakra-ui/react";
import { Link as RouterLink }   from "react-router-dom";

const TopBar = () =>{

    return(
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
                ml  = {20}
                as  = {RouterLink}
                to  = "/aboutme"
            >
                About Me
            </Link>
            <Link 
                ml  = {10}
                as  = {RouterLink}
                to  = "/education"
            >
                My Education
            </Link>
            <Link 
                ml  = {10}
                as  = {RouterLink}
                to  = "/career"
            >
                My Career
            </Link>
            <Link 
                ml  = {10}
                as  = {RouterLink}
                to  = "/projects/home"
            >
                My Projects
            </Link>
            <Link
                ml      = {10}
                href    = "https://docs.google.com/document/d/1fo_6aZ1ikzC2wWy5SYEKG37qytN1OPtyNMP9aAsPYFs/export?format=pdf"
                target  = "_blank"
            >
                My Resume
            </Link>
        </Box>
    );
};

export default TopBar;
