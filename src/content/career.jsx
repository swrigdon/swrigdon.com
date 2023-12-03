import React            from "react";
import { Box, 
        Center, 
        Grid, 
        GridItem, 
        ListItem, 
        UnorderedList } from "@chakra-ui/react";
import OCLogo           from "../img/ocGovLogo.png";
import DisneyLogo       from "../img/dpep.jpg";

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
                    As a System Application Development and Sustainment Analyst, my job is to support the business and infrastructure needs of Disney Sales and Travel Operations, with the Travel Operations Shared Services team (DTOSS).
                    More specifically, most of work revolves around building applications for, and supporting the thousands of agents, managers, and directors at the Disney Reservation Center in Orlando, and Tampa, FL, as well as 
                    contact centers in Memphis, TN and Anaheim, CA.
                    <br />
                    <br />
                    Some of my work is listed below:
                    <br />
                    <UnorderedList>
                        <ListItem>Currently co-developing a replacement for the call Quality Assurance application, which is used in Florida, California, and Tennessee for thousands of agents and their leaders</ListItem>
                        <ListItem>Currently the lead developer on a project to migrate our existing backend infrastructure from SharePoint 2013, to a custom webserver hosted in VMWare RHEL instances, coupled with a SQL Server database</ListItem>
                        <ListItem>Developed an application to replace the manual annual review process for about 2000 phone agents and their managers</ListItem>
                        <ListItem>Developed a company store application to redeem points for hundreds of contact center agents and their leaders in California</ListItem>
                        <ListItem>Worked in a joint effort with the Travel Operations Telecom team to redesign and standardize the CI/CD flow for web applications deployed for the Disney Reservation Center</ListItem>
                        <ListItem>Developed a replacement for an at-a-glance dashboard for important Walt Disney World park information used by phone agents</ListItem>
                        <ListItem>Jointly developed a tracking application that provided statistics used in crucial reports used by directors, VPs, and SVPs to make business critical decisions at the beginning of the COVID-19 pandemic</ListItem>
                    </UnorderedList>
                </GridItem>
                <GridItem 
                    colSpan = {4}
                    marginBottom = {5}
                >
                    <strong>The Walt Disney Company - Web Developer Intern (May 2019 - February 2020)</strong>
                    <hr />
                    <br />
                    While I was a Web Development Intern, my role was largely to support and add minor features to existing web applications for Sales and Travel Operations, as well as developing replacements for web applications that had become deprecated.
                    <br />
                    <br />
                    Some of my work is listed below:
                    <br />
                    <UnorderedList>
                        <ListItem>Developed and deployed the first ReactJS web application in Sales and Travel Operations</ListItem>
                        <ListItem>Identified and fixed server-crippling bugs in legacy applications</ListItem>
                    </UnorderedList>
                </GridItem>
                <GridItem 
                    colSpan = {4}
                    marginBottom = {5}
                >
                    <strong>The Walt Disney Company - System Integration Intern (June 2017 - June 2018)</strong>
                    <hr />
                    <br />
                    While I was a System Integration Intern, my role was to work with other interns, as well as members of the Disney Travel Operations Shared Services team to create a new, automated system
                    to track Personnel Action Notices (PANs). This system coordinated the efforts of half a dozen different teams.
                    <br />
                    <br />
                    Some of my work on the project is listed below
                    <UnorderedList>
                        <ListItem>Developed several portions of the UI using HTML, CSS, vanilla Javascript, and jQuery</ListItem>
                        <ListItem>Created several of the Nintex Workflow 2013 workflows in SharePoint 2013 that handled the automated logic to facilitate moving the PANs from team to team, as well as making sure that each team completed their portion of the PAN process in a timely manner</ListItem>
                    </UnorderedList>
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
                    While I was a Student Intern for the Orange County Florida's Internal Systems and Services division, I was tasked with updating and maintaining the county website, <a href="https://www.ocfl.net">ocfl.net</a>, using a combination of 
                    HTML and CSS within Dotnetnuke modules. During my time there I also assisted in helping test and develop the county's intranet site in SharePoint 2013.
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Career;
