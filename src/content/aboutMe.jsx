import React from "react";
import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import differenceInYears from "date-fns/differenceInYears";
import AboutMePhoto from "../img/aboutMe.jpg";
import "../css/content.css";

const calculateAge = () =>{

    const now       = Date.now();
    const birthDate = new Date(1996, 8, 17);

    return differenceInYears(now, birthDate);
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
                    <h3 style={{fontSize: "2.25em"}}>Howdy!</h3> 
                    <br />
                    <br />
                    My name is Stephen. I'm a {calculateAge()} year-old software developer currently working for The Walt Disney Company.
                    I graduated from the University of Central Florida with my Bachelor's of Science in Computer Science in 2020. At Disney, I am responsible for developing
                    full-stack web applications to support Disney Sales and Travel Operations at the Disney Reservation Center. Outside of work, I 
                    am extremely passionate about computer graphics, particularly hardware and software rendering, as well as programming physics. When I'm not coding I enjoy hiking, video games, American football,
                    and playing guitar. Have a look around my site to learn more about my professional work, as well as my personal and academic projects.
                    <br />
                    <br />
                    Thanks for stopping by!
                    <br />
                    <br />
                    - Stephen
                </GridItem>
            </Grid>
            <Grid
                templateColumns = "repeat(5, 1fr)"
                gap = {4}
            >
                <GridItem colSpan = {1}>
                </GridItem>
                <GridItem colSpan = {4}>
                    <h3 style={{fontSize: "2.25em"}}>My Skills</h3>
                    <br />
                    <h4 style = {{fontSize: "1.5em"}}>Languages</h4>
                    <hr />
                    <br />
                    <Grid
                        templateColumns = "repeat(5, 1fr)"
                        gap = {4}
                     >
                        <GridItem colSpan = {2}>
                            <strong>Proficient In:</strong>
                            <ul>
                                <li>JavaScript/TypeScript</li>
                                <li>HTML</li>
                                <li>CSS/SCSS</li>
                            </ul>
                        </GridItem>
                        <GridItem colSpan = {2}>
                            <strong>Familiar With:</strong>
                            <ul>
                                <li>C</li>
                                <li>C++</li>
                                <li>Java</li>
                                <li>Powershell</li>
                                <li>Python</li>
                                <li>SQL</li>
                            </ul>
                        </GridItem>
                    </Grid>
                    <br />
                    <br />
                    <h4 style = {{fontSize: "1.5em"}}>Frameworks, Libraries, and Tools</h4>
                    <hr />
                    <br />
                    <Grid
                        templateColumns = "repeat(5, 1fr)"
                        gap = {4}
                     >
                        <GridItem colSpan = {1}>
                            <ul>
                                <li>Jenkins</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>GitLab CI</li>
                            </ul>
                        </GridItem>
                        <GridItem colSpan = {1}>
                            <ul>
                                <li>Babel</li>
                                <li>Webpack</li>
                                <li>ESLint</li>
                                <li>ReactJS</li>
                            </ul>
                        </GridItem>
                        <GridItem colSpan = {1}>
                            <ul>
                                <li>React Router</li>
                                <li>date-fns</li>
                                <li>Bootstrap</li>
                                <li>AWS EC2</li>
                                <li>OAuth/OIDC</li>
                            </ul>
                        </GridItem>
                        <GridItem colSpan = {1}>
                            <ul>
                                <li>AWS Aurora DB</li>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>Websockets</li>
                                <li>GraphQL</li>
                            </ul>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default AboutMe;
