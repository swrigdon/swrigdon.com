import React                from "react";
import { Grid, GridItem }   from "@chakra-ui/react";

const CareerProjects = () =>{

    return (
        <Grid templateColumns = "repeat(5, 1fr)">
            <GridItem 
                colSpan = {1}
                marginTop = {5}
            >
            </GridItem>
            <GridItem 
                colSpan = {4}
                marginLeft = {5}
                marginTop = {5}
            >
                    <h3 style={{fontSize: "2.25em"}}>Career Projects</h3>
                    <hr />
            </GridItem>
            <GridItem 
                colSpan = {1}
                marginTop = {5}
            >
            </GridItem>
            <GridItem 
                colSpan = {4}
                marginLeft = {5}
                marginTop = {5}
            >
                <strong>Brawliseum: A Procedural Death Labyrinth</strong>
                <p><a href="https://github.com/swrigdon/Brawliseum">GitHub Repo</a></p>
                <p>
                    Brawliseum is a 2D dungeon crawler with procedurally generated levels, written in Java using the <a href="https://libgdx.com/">libGDX framework</a>.
                    Myself and 5 others developed this game as a class project at UCF.
                </p>
            </GridItem>
            <GridItem 
                colSpan = {1}
                marginTop = {5}
            >
            </GridItem>
            <GridItem 
                colSpan = {4}
                marginLeft = {5}
                marginTop = {5}
            >
                <strong>RealityFlow</strong>
                <p>
                    RealityFlow is a collaborative augmented reality platform that allows users to make changes to a 3D
                    scene in a mobile application, on a web page, or in a Unity scene, and have those changes reflected instantaneously
                    on an AR headset such as the Microsoft HoloLens or the Magic Leap 1. This was a senior design project with myself and 4 others,
                    with Dr. John Murray at the University of Central Florida being our sponsor.
                </p>
                <br />
                <p>
                    My role in this project was to write the web server to facilitate passing the data between all of the clients, as well
                    as writing the storage solution to save projects and users. The server was a Node-based server written in TypeScript, and using WebSockets to pass
                    data between the clients. The database was a MongoDB database, along with the MongooseJS framework to model and store our data coming from the server.
                </p>
            </GridItem>
        </Grid>
    );
};

export default CareerProjects;
