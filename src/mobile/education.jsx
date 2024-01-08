import React from "react";
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


const Education = () => {
    const awsCCPLogo = 
    <Link maxW="37%" href="https://www.credly.com/badges/9154a3c4-935b-4377-8550-ee67e857d48a" target="_blank">
         <Image src="https://cloud.swrigdon.com/s/tDcXTaS4T2aEGFG/preview"/>    
    </Link>;
    const awsDevAssocLogo =
    <Link maxW="37%" href="https://www.credly.com/badges/64f4d7e9-60cd-4802-9c67-37c990767c3d" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/p7rFdc5wHEWSBQm/preview"/>
    </Link>;
    const ucfLogo = 
    <Link maxW="37%" href="https://www.cecs.ucf.edu/" target="_blank">
        <Image src="https://cloud.swrigdon.com/s/Bc6fwaWAQH7zoQY/preview"/>
    </Link>;
    return(
        <Container
            minW="95%"
            marginTop="3%"
        >
            <Center>
                <Text fontSize="3em">
                    My Education
                </Text>
            </Center>
            <br />
            <Card paddingLeft="3%">
                <CardBody>
                    <Center>
                        <Text fontSize="2em">
                            Certifications
                        </Text>
                    </Center>
                    <hr/>
                    <Stack direction="column" paddingTop="2.5%" paddingBottom="2.5%">
                        <Center>
                            {awsCCPLogo}
                        </Center>
                        <Center>
                            {awsDevAssocLogo}
                        </Center>
                    </Stack>
                    <Center>
                        <Text fontSize="2em">
                            Schooling
                        </Text>
                    </Center>
                    <hr />
                    <Stack direction="column" paddingTop="2.5%">
                        <Center>
                            {ucfLogo}
                        </Center>
                        <Text fontSize="1em" paddingLeft="2.5%">
                            B.S. in Computer Science - University of Central Florida (Graduated 2020)
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Container>        
    );
};

export default Education;