import {
    Card,
    CardBody,
    Container,
    Image,
    Link,
    Stack,
    Text
} from "@chakra-ui/react";
import React from "react";

const Projects = () => {
    const rendyThumbnail = 
    <Link maxW="25%" href="https://github.com/swrigdon/Rendy" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/2CRbA69mLRg8S4x/preview"/>
    </Link>;
    const realityFlowThumbnail = 
    <Link maxW="25%" href="https://github.com/lucidbard/realityflow_2" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/YacP4WdetBH4fME/preview"/>
    </Link>;
    const brawliseumThumbnail =
    <Link maxW="25%" href="https://github.com/swrigdon/Brawliseum" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/fXfAEbHGaqKrgkq/preview" />
    </Link>;

    return(
        <Container
            maxW="66%"
            marginTop="3%"
        >
            <Text fontSize="4em">
                My Projects
            </Text>
            <br />
            <Card paddingLeft="3%">
                <CardBody>
                    <Text fontSize="2.5em">
                        Rendy
                    </Text>
                    <Stack direction="row">
                        {rendyThumbnail}
                    </Stack>
                    <Text fontSize="2.5em">
                        RealityFlow
                    </Text>
                    <Stack direction="row">
                        {realityFlowThumbnail}
                    </Stack>
                    <Text fontSize="2.5em">
                        Brawliseum
                    </Text>
                    <Stack direction="row">
                        {brawliseumThumbnail}
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    );
};

export default Projects;