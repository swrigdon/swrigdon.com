import React from "react";
import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import differenceInCalendarYears from "date-fns/differenceInCalendarYears";
import AboutMePhoto from "../img/aboutMe.jpg";
import "../css/content.css";

const calculateAge = () =>{

    const now       = Date.now();
    const birthDate = new Date(1996, 8, 17);

    return differenceInCalendarYears(now, birthDate);
}

const AboutMe = () =>{

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
                <GridItem colSpan = {1}>
                    <Center>
                        <img src = {AboutMePhoto} alt = "About Me"/>
                    </Center>
                </GridItem>
                <GridItem colSpan = {4}>
                    Howdy! 
                    <br />
                    <br />
                    My name is Stephen. I'm a {calculateAge()} year-old software developer currently working for The Walt Disney Company.
                    I graduated from the University of Central Florida with my Bachelor's of Science in Computer Science in 2020. At Disney, I am responsible for developing
                    both front-end and back-end web applications to support Disney Sales and Travel Operations at the Disney Reservation Center. Outside of work, I 
                    am extremely passionate about computer graphics, particularly hardware and software rendering, as well as programming physics. When I'm not coding I enjoy hiking, video games, football,
                    and playing guitar. Have a look around my site to learn more about my professional work, as well as my personal and academic projects.
                    <br />
                    <br />
                    Thanks for stopping by!
                    <br />
                    <br />
                    - Stephen
                </GridItem>
            </Grid>
        </Box>
    );
}

export default AboutMe;
