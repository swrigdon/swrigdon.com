import React from "react";
import { Box, Center } from "@chakra-ui/react";
import "../css/content.css";
import "../css/home.css";

const Home = () =>{

    return(
        <div className = "Content">
            <Box
                w           = "100%"
                h           = "100%"
                bg          = "purple"
                minH        = "100%"
                className   = "HomeBackground"
            >
            </Box>
            <Center>
                <h1 className = "HomeTitle">Stephen William Rigdon</h1>
            </Center>
        </div>
    );
}

export default Home;
