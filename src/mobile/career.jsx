import React from "react";
import {
    Card,
    CardBody,
    Center,
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
    const AmazonLogo = 
    <Link maxW="37%" href="https://flex.amazon.com" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/YMKGT6eiG9A25c5/preview"/>
    </Link>;
    const DisneyLogo = 
    <Link maxW="37%" href="https://disneyworld.disney.go.com" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/a3NdcgoCa8o77Y5/preview"/>
    </Link>;
    const NoCapLogo = 
    <Link maxW="37%" href="https://www.nocapshows.com" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/fwDLbMDbWwfPtin/preview"/>
    </Link>;
    const OCLogo = 
    <Link maxW="37%" href="https://www.ocfl.net/" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/ZBN9KAEsFaYa4tS/preview"/>
    </Link>;
    
    return(
        <Container
            id="career"
            maxW="95%"
            marginTop="3%"
            border="1px"
            borderColor="lightGray"
            borderRadius="10px"
            paddingBottom="5%"
        >
            <Center>
                <Text fontSize="3em">
                    My Career
                </Text>
            </Center>
            <br />
            <Card paddingLeft="3%" paddingBottom="2.5%">
                <CardBody>
                    <Center>
                        <Text fontSize="2.5em">
                            Industry
                        </Text>
                    </Center>
                    <hr />
                    <Stack direction="column" paddingTop="2.5%">
                        <Center>
                            {AmazonLogo}
                        </Center>
                        <Container>
                            <AmazonText headingFontSize="1.5em" fontSize="1em"/>
                        </Container>
                    </Stack>
                    <hr />
                    <Stack direction="column" marginTop="5%">
                        <Center>
                            {NoCapLogo}
                        </Center>
                        <Container>
                            <NoCapText headingFontSize="1.5em" fontSize="1em"/>
                        </Container>
                    </Stack>
                    <hr />
                    <Stack direction="column" marginTop="5%">
                        <Center>
                            {DisneyLogo}                        
                        </Center>
                        <Container>
                            <DisneyText1 headingFontSize="1.5em" fontSize="1em"/>
                        </Container>
                    </Stack>
                    <Center>
                        <Text fontSize="2.5em" marginTop="2.5%">
                            Internships
                        </Text>
                    </Center>
                    <hr />
                    <Stack direction="column" paddingTop="2.5%">
                        <Center>
                            {DisneyLogo}                        
                        </Center>
                        <Container>
                            <DisneyText2 headingFontSize="1.5em" fontSize="1em"/>
                        </Container>
                    </Stack>
                    <hr />
                    <Stack direction="column" marginTop="5%">
                        <Center>
                            {DisneyLogo}                        
                        </Center>
                        <Container>
                            <DisneyText3 headingFontSize="1.5em" fontSize="1em"/>
                        </Container>
                    </Stack>
                    <hr />
                    <Stack direction="column" marginTop="5%">
                        <Center>
                            {OCLogo}                        
                        </Center>
                        <Container>
                            <OCText headingFontSize="1.5em" fontSize="1em"/>
                        </Container>
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    );
}

export default Career;