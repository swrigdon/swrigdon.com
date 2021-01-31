import React from "react";
import { Box, Center, Grid, GridItem } from "@chakra-ui/react";

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
                </GridItem>
                <GridItem colSpan = {4}>
                    <h3 style={{fontSize: "2.25em"}}>My Projects</h3>
                </GridItem>
            </Grid>
            <br />
            <br />
            <Grid
                templateColumns = "repeat(5, 1fr)"
                gap = {4}
            >
                <GridItem colSpan = {1}>
                </GridItem>
                <GridItem colSpan = {4}>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default ProjectHome;
