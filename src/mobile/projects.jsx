import {
    Card,
    CardBody,
    Center,
    Container,
    Image,
    Link,
    Stack,
    Text
} from "@chakra-ui/react";
import React from "react";

const Projects = () => {
    const rendyThumbnail = 
    <Link maxW="90%" href="https://github.com/swrigdon/Rendy" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/7m9FZoz4KZRyfHP/preview"/>
    </Link>;
    const realityFlowThumbnail = 
    <Link maxW="90%" href="https://github.com/lucidbard/realityflow_2" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/ecNmsMbAbZmBdEM/preview"/>
    </Link>;
    const brawliseumThumbnail =
    <Link maxW="90%" href="https://github.com/swrigdon/Brawliseum" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/rmiLQYEnyYiTB4o/preview" />
    </Link>;

    return(
        <Container
            id="projects"
            maxW="95%"
            marginTop="3%"
            border="1px"
            borderColor="lightGray"
            borderRadius="10px"
            paddingBottom="5%"
        >
            <Center>
                <Text fontSize="3em">
                    My Projects
                </Text>
            </Center>
            <br />
            <Card paddingLeft="3%">
                <CardBody>
                    <Center>
                        <Text fontSize="2em">
                            Rendy
                        </Text>
                    </Center>
                    <Stack direction="column">
                        <Center>
                            {rendyThumbnail}
                        </Center>
                        <Text fontSize="1em" marginLeft="5%">
                            Rendy is a software ray tracer written entirely in C++ by myself as a learning exercise.
                            Rendy is still in active development and its progress can be tracked over on GitHub.
                            The intention is to develop it over time into a feature-complete ray tracer utilizing DirectX 12.
                        </Text>
                    </Stack>
                    <hr />
                    <Center marginTop="5%">
                        <Text fontSize="2em">
                            RealityFlow
                        </Text>
                    </Center>
                    <Stack direction="column">
                        <Center>
                            {realityFlowThumbnail}
                        </Center>
                        <Text fontSize="1em" marginLeft="5%">
                            RealityFlow was a senior project in college that I developed under Dr. John Murray alongside a team of
                            four other developers. The goal was to bring collaboration to the VR space. By the time the project
                            was finished, we had successfully written a cloud server and database that could communicate between
                            a web client, a Unity instance via a plugin, and a HoloLens headset. This work was continued on by Dr. Murray.
                            Unfortunately the GitHub repo is currently private.
                        </Text>
                    </Stack>
                    <hr />
                    <Center marginTop="5%">
                        <Text fontSize="2em">
                            Brawliseum
                        </Text>
                    </Center>
                    <Stack direction="column">
                        <Center>
                            {brawliseumThumbnail}
                        </Center>
                        <Text fontSize="1em" marginLeft="5%">
                            Brawliseum was a game I developed in college alongside four other students. It is a pseudo-random dungeon crawler
                            written in Java with the libGDX library and uses the A* algorithm to carve out the maze paths for each level. 
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    );
};

export default Projects;