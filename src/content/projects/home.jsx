import React from "react";
import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProjectHome = () =>{

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
                        <Link to={"/projects"}>
                            All Projects
                        </Link>
                        <hr />
                        <Link to={"/projects/school"}>
                            School Projects
                        </Link>
                        <hr />
                        <Link to={"/projects/work"}>
                            Work Projects
                        </Link>
                        <hr />
                        <Link to={"/projects/personal"}>
                            Personal Projects
                        </Link>
                    </Stack>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default ProjectHome;
