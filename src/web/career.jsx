import React from "react";
import {
    Card,
    CardBody,
    Container,
    Link,
    Image,
    Stack,
    Text
} from "@chakra-ui/react";
import AmazonText from '../components/Career/amazonText';
import NoCapText from '../components/Career/nocapText';
import DisneyText1 from '../components/Career/disneyText1';
import DisneyText2 from '../components/Career/disneyText2';
import DisneyText3 from '../components/Career/disneyText3';
import OCText from '../components/Career/ocText';

const Career = () => {
    const containerWidth = "66%";
    const subContainerWidth = "85%";
    const AmazonLogo = 
    <Link maxW="10%" href="https://flex.amazon.com" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/YMKGT6eiG9A25c5/preview"/>
    </Link>;
    const DisneyLogo = 
    <Link maxW="10%" href="https://disneyworld.disney.go.com" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/a3NdcgoCa8o77Y5/preview"/>
    </Link>;
    const NoCapLogo = 
    <Link maxW="10%" href="https://www.nocapshows.com" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/fwDLbMDbWwfPtin/preview"/>
    </Link>;
    const OCLogo = 
    <Link maxW="10%" href="https://www.ocfl.net/" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/ZBN9KAEsFaYa4tS/preview"/>
    </Link>;
    
    return(
        <Container
            id="career"
            minW={containerWidth}
            marginTop="3%"
            border="1px"
            borderColor="lightGray"
            borderRadius="10px"
            paddingTop="1%"
            paddingRight="2.5%"
            paddingLeft="2.5%"
            paddingBottom="2.5%"
        >
            <Text fontSize="4em">
                My Career
            </Text>
            <br />
            <Card paddingLeft="3%" paddingBottom="2.5%">
                <CardBody>
                    <Text fontSize="2.5em">
                        Industry
                    </Text>
                    <hr />
                    <Stack direction="row" paddingTop="2.5%">
                        {AmazonLogo}
                        <Container minWidth={subContainerWidth}>
                            <AmazonText headingFontSize="1.5em" fontSize="1em"/>
                        </Container>
                    </Stack>
                    <Stack direction="row" paddingTop="2.5%">
                        {NoCapLogo}
                        <Container minWidth={subContainerWidth}>
                            <NoCapText headingFontSize="1.5em" fontSize="1em"/>
                        </Container>
                    </Stack>
                    <Stack direction="row" paddingTop="2.5%">
                        {DisneyLogo}
                        <Container minWidth={subContainerWidth}>
                            <DisneyText1 headingFontSize="1.5em" fontSize="1em"/>
                        </Container>
                    </Stack>
                    <Text fontSize="2.5em" marginTop="2.5%">
                        Internships
                    </Text>
                    <hr />
                    <Stack direction="row" paddingTop="2.5%">
                        {DisneyLogo}
                        <Container minWidth={subContainerWidth}>
                            <DisneyText2 headingFontSize="1.5em" fontSize="1em"/>
                        </Container>
                    </Stack>
                    <Stack direction="row" paddingTop="2.5%">
                        {DisneyLogo}
                        <Container minWidth={subContainerWidth}>
                            <DisneyText3 headingFontSize="1.5em" fontSize="1em"/>
                        </Container>
                    </Stack>
                    <Stack direction="row" paddingTop="2.5%">
                        {OCLogo}
                        <Container minWidth={subContainerWidth}>
                            <OCText headingFontSize="1.5em" fontSize="1em"/>
                        </Container>
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    );
}

export default Career;