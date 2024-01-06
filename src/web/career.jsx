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

const Career = () => {
    const AmazonLogo = 
    <Link maxW="10%" href="https://flex.amazon.com" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/wBt4Bc7i8PxRMen/preview"/>
    </Link>;
    const DisneyLogo = 
    <Link maxW="10%" href="https://disneyworld.disney.go.com" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/o4NspG7yXHZdfHW/preview"/>
    </Link>;
    const NoCapLogo = 
    <Link maxW="10%" href="https://www.nocapshows.com" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/S9xW3Hp5E3rHW6H/preview"/>
    </Link>;
    const OCLogo = 
    <Link maxW="10%" href="https://www.ocfl.net/" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/Y8afn6DZ2A7RXxF/preview"/>
    </Link>;
    
    return(
        <Container
            minW="66%"
            marginTop="3%"
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
                        <Text fontSize="1.5em" paddingLeft="2.5%">
                            Amazon - Software Development Engineer II (Sep 2022 - Present)
                        </Text>
                    </Stack>
                    <Stack direction="row" paddingTop="2.5%">
                        {NoCapLogo}
                        <Text fontSize="1.5em" paddingLeft="2.5%">
                            NoCap Live, LLC - Software Engineer (Aug 2021 - Sep 2022)
                        </Text>
                    </Stack>
                    <Stack direction="row" paddingTop="2.5%">
                        {DisneyLogo}
                        <Text fontSize="1.5em" paddingLeft="2.5%">
                            Disney - System Development and Sustainment Analyst (Feb 2020 - Aug 2021)
                        </Text>
                    </Stack>
                    <Text fontSize="2.5em" marginTop="2.5%">
                        Internships
                    </Text>
                    <hr />
                    <Stack direction="row" paddingTop="2.5%">
                        {DisneyLogo}
                        <Text fontSize="1.5em" paddingLeft="2.5%">
                            Disney - Web Development Intern (May 2019 - Feb 2020)
                        </Text>
                    </Stack>
                    <Stack direction="row" paddingTop="2.5%">
                        {DisneyLogo}
                        <Text fontSize="1.5em" paddingLeft="2.5%">
                            Disney - System Integration Intern (Jun 2017 - Jun 2018)
                        </Text>
                    </Stack>
                    <Stack direction="row" paddingTop="2.5%">
                        {OCLogo}
                        <Text fontSize="1.5em" paddingLeft="2.5%">
                            Orange County, FL Government - Student Intern (Sep 2015 - Apr 2016)
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    );
}

export default Career;