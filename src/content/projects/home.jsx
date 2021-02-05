import React, { useState } from "react";
import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";
import { Switch, Route } from "react-router-dom";
import SchoolProjects from "./school";
import CareerProjects from "./career";
import PersonalProjects from "./personal";

const ProjectHome = () =>{

    const [content, setContent] = useState("all");
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
                    <Stack 
                        direction   = {"column"}
                        spacing     = {"10%"}
                    >
                        <button
                            onClick={()=>{setContent("all");}}
                            type="button"
                        >
                            All Projects
                        </button>
                        <hr />
                        <button
                            type="button"
                            onClick={()=>{setContent("personal");}}
                        >
                            Personal Projects
                        </button>
                        <hr />
                        <button
                            onClick={()=>{setContent("school");}}
                            type="button"
                        >
                            School Projects
                        </button>
                        <hr />  
                        <button
                            onClick={()=>{setContent("work");}}
                            type="button"
                        >
                            Work Projects
                        </button>
                        
                    </Stack>
                </GridItem>
                <GridItem colSpan={4}>
                    {
                        ()=>{
                            switch(content){

                                case "all":
                                    return(
                                        <div>
                                            <CareerProjects/>
                                            <PersonalProjects/>
                                            <SchoolProjects/>
                                        </div>
                                    );
                                case "personal":
                                    return(
                                        <div>
                                            <PersonalProjects/>
                                        </div>
                                    );
                                case "school":
                                    return(
                                        <div>
                                            <SchoolProjects/>
                                        </div>
                                    );
                                case "work":
                                    return(
                                        <div>
                                            <CareerProjects/>
                                        </div>
                                    );
                            }
                        }
                    }
                </GridItem>
            </Grid>
        </Box>
    );
}

export default ProjectHome;
