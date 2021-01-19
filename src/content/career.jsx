import React from "react";
import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import OCLogo from "../img/ocGovLogo.png";
import DisneyLogo from "../img/dpep.jpg";

const Career = () =>{

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
                <GridItem 
                    colSpan = {1}
                    rowSpan = {3}
                >
                </GridItem>
                <GridItem 
                    colSpan = {4}
                >
                    <h3 style={{fontSize: "2.25em"}}>My Career</h3> 
                </GridItem>
            </Grid>
            <Grid
                templateColumns = "repeat(5, 1fr)"
                gap = {4}
            >
                <GridItem 
                    colSpan = {1}
                    rowSpan = {3}
                >
                    <Center>
                        <img src = {DisneyLogo} alt = "Walt Disney Parks, Experiences, and Products"/>
                    </Center>
                </GridItem>
                <GridItem 
                    colSpan = {4}
                    marginBottom = {5}
                >
                    <strong>The Walt Disney Company - System Application Development and Sustainment Analyst (February 2020 - Now)</strong>
                    <hr />
                    <br />
                    I was a student at the University of Central Florida from 2014 to 2020, pursuing and earning my Bachelor's of Science in
                    Computer Science. During my time there, I was vice president and president of the UCF chapter of the
                    Association for Computing Machinery, and I was also involved with the UCF Tech Knights organization as well. 
                </GridItem>
                <GridItem 
                    colSpan = {4}
                    marginBottom = {5}
                >
                    <strong>The Walt Disney Company - Web Developer Intern (May 2019 - February 2020)</strong>
                    <hr />
                    <br />
                    I was a student at the University of Central Florida from 2014 to 2020, pursuing and earning my Bachelor's of Science in
                    Computer Science. During my time there, I was vice president and president of the UCF chapter of the
                    Association for Computing Machinery, and I was also involved with the UCF Tech Knights organization as well. 
                </GridItem>
                <GridItem 
                    colSpan = {4}
                    marginBottom = {5}
                >
                    <strong>The Walt Disney Company - System Integration Intern (June 2017 - June 2018)</strong>
                    <hr />
                    <br />
                    I was a student at the University of Central Florida from 2014 to 2020, pursuing and earning my Bachelor's of Science in
                    Computer Science. During my time there, I was vice president and president of the UCF chapter of the
                    Association for Computing Machinery, and I was also involved with the UCF Tech Knights organization as well. 
                </GridItem>
            </Grid>
            <Grid
                templateColumns = "repeat(5, 1fr)"
                gap = {4}
                marginTop = {5}
            >
                <GridItem 
                    colSpan = {1}
                    rowSpan = {2}
                >
                <Center>
                    <img src = {OCLogo} alt = "Orange County Government"/>
                </Center>
                </GridItem>
                <GridItem colSpan = {4}></GridItem>
                <GridItem colSpan = {4}>
                    <strong>Orange County Government - Student Intern (September 2015 - April 2016)</strong>
                    <hr />
                    <br />
                    I was a student at the University of Central Florida from 2014 to 2020, pursuing and earning my Bachelor's of Science in
                    Computer Science. During my time there, I was vice president and president of the UCF chapter of the
                    Association for Computing Machinery, and I was also involved with the UCF Tech Knights organization as well. 
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Career;
