import React        from "react";
import { Box, 
        Center, 
        Grid, 
        GridItem }  from "@chakra-ui/react";
import UCFLogo      from "../img/ucfLogo.png";

const Education = () =>{

    return(
        <Box
            mt      = {10}
            ml      = {10}
            mr      = {10}
            p       = {10}
            shadow  = "2xl"
        >
            <Grid
                templateColumns = "repeat(5, 1fr)"
                gap = {4}
            >
                <GridItem colSpan = {1}></GridItem>
                <GridItem colSpan = {4}>
                    <h3 style={{fontSize: "2.25em"}}>My Education</h3> 
                </GridItem>
            </Grid>
            <Grid
                templateColumns = "repeat(5, 1fr)"
                gap = {4}
            >
                <GridItem colSpan = {1}>
                    <Center>
                        <img src = {UCFLogo} alt = "UCF"/>
                    </Center>
                </GridItem>
                <GridItem 
                    colSpan = {4}
                    marginTop = {10}
                >
                    <strong>B.S. Computer Science - University of Central Florida (August 2020)</strong>
                    <hr />
                    <br />
                    I was a student at the University of Central Florida from 2014 to 2020, pursuing and earning my Bachelor's of Science in
                    Computer Science. During my time there, I was vice president and president of the UCF chapter of the
                    Association for Computing Machinery, and I was also involved with the UCF Tech Knights organization as well. 
                    <br />
                    <br />
                    During my time there, I worked on several projects, some of which are in the projects tab of this site. 
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Education;
