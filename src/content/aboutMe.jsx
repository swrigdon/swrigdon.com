import React                from "react";
import { Box, 
        Center, 
        Grid, 
        GridItem, 
        ListItem, 
        UnorderedList }     from "@chakra-ui/react";
import differenceInYears    from "date-fns/differenceInYears";
import AboutMePhoto         from "../img/aboutMe.jpg";

const calulateAge = () =>{

    const now       = Date.now();
    const birthDate = new Date(1996, 8, 17);

    return differenceInYears(now, birthDate);
};

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
                    My name is Stephen. I'm a {calulateAge()} year-old software developer currently working for The Walt Disney Company.
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
                            <UnorderedList>
                                <ListItem>CSS/SCSS</ListItem>
                                <ListItem>HTML</ListItem>
                                <ListItem>JavaScript/TypeScript</ListItem>
                            </UnorderedList>
                        </GridItem>
                        <GridItem colSpan = {2}>
                            <strong>Familiar With:</strong>
                            <UnorderedList>
                                <ListItem>C</ListItem>
                                <ListItem>C#</ListItem>
                                <ListItem>Java</ListItem>
                                <ListItem>Powershell</ListItem>
                                <ListItem>Python</ListItem>
                                <ListItem>SQL</ListItem>
                            </UnorderedList>
                        </GridItem>
                    </Grid>
                    <h4 style = {{fontSize: "1.5em"}}>Frameworks, Libraries, and Tools</h4>
                    <hr />
                    <br />
                    <Grid
                        templateColumns = "repeat(5, 1fr)"
                        gap = {4}
                     >
                        <GridItem colSpan = {1}>
                            <UnorderedList>
                                <ListItem>Babel</ListItem>
                                <ListItem>Bootstrap</ListItem>
                                <ListItem>ESLint</ListItem>
                                <ListItem>ExpressJS</ListItem>
                                <ListItem>Git</ListItem>
                            </UnorderedList>
                        </GridItem>
                        <GridItem colSpan = {1}>
                            <UnorderedList>
                                <ListItem>GitHub</ListItem>
                                <ListItem>GitLab CI</ListItem>
                                <ListItem>Jenkins</ListItem>
                                <ListItem>MongoDB</ListItem>
                                <ListItem>MongooseJS</ListItem>
                            </UnorderedList>
                        </GridItem>
                        <GridItem colSpan = {1}>
                            <UnorderedList>
                                <ListItem>NodeJS</ListItem>
                                <ListItem>OAuth/OIDC</ListItem>
                                <ListItem>Prisma</ListItem>
                                <ListItem>ReactJS</ListItem>
                                <ListItem>React Router</ListItem>
                            </UnorderedList>
                        </GridItem>
                        <GridItem colSpan = {1}>
                            <UnorderedList>
                                <ListItem>REST</ListItem>
                                <ListItem>RHEL</ListItem>
                                <ListItem>SharePoint 2013</ListItem>
                                <ListItem>SQL Server</ListItem>
                                <ListItem>Webpack</ListItem>
                                <ListItem>Websockets</ListItem>
                            </UnorderedList>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default AboutMe;
