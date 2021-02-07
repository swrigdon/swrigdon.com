import React, { useState }              from "react";
import { Box, Grid, GridItem, Stack }   from "@chakra-ui/react";
import SchoolProjects                   from "./school";
// import CareerProjects                   from "./career";

const ProjectHome = () =>{

    const [content, setContent] = useState("all");
    let jsx = null;
    switch(content){

        case "all":
            jsx = <div>
                    {/* <CareerProjects/> */}
                    <SchoolProjects/>
                </div>;
        break;
        case "school":
            jsx =   <div>
                        <SchoolProjects/>
                    </div>;
        break;
        // case "career":
        //     jsx =   <div>
        //                 <CareerProjects/>
        //             </div>;
        // break;
        default:
            jsx = <div>
                    {/* <CareerProjects/> */}
                    <SchoolProjects/>
                </div>;
        break;
    }
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
                    style       = {{borderRight: "1px solid #E2E8F0"}}
                >
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
                        {/* <button
                            onClick={()=>{setContent("career");}}
                            type="button"
                        >
                            Career Projects
                        </button>
                        <hr /> */}
                        <button
                            onClick={()=>{setContent("school");}}
                            type="button"
                        >
                            School Projects
                        </button>
                    </Stack>
                </GridItem>
                <GridItem colSpan={4}>
                    {jsx}
                </GridItem>
            </Grid>
        </Box>
    );
};

export default ProjectHome;
